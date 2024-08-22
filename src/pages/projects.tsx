import React from 'react'
import { GetServerSideProps } from 'next'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { octokit } from './api/api'
import { FrontEndProjectsCard } from '@/components/FrontEndProjectsCard'
import { BackEndProjectsCard } from '@/components/BackEndProjectCard'

export interface Repository {
  id?: number
  name: string
  description: string
  html_url: string
  readme?: string
  deployUrl?: string
}

export interface RepositoriesPageProps {
  repositories: [
    { frontEndRepositories: Repository[] },
    { backEndRepositories: Repository[] },
  ]
}

export default function RepositoriesPage({
  repositories,
}: RepositoriesPageProps) {
  return (
    <>
      <Header />
      <main className="py-8 px-28 mb-6 mobile:px-4">
        <h1 className="text-center font-bold text-white  text-3xl">
          {'<'}Projects {'/>'}
        </h1>
        <span className="text-gray-400 mb-2">My projects!</span>
        <h1 className="text-white font-bold text-3xl mb-10">
          Take a look on my{' '}
          <span className="text-bold text-blue-600">Front-End</span> Projects 🚀
        </h1>
        <section className="grid grid-cols-3 gap-10 mb-14 mobile:grid-cols-1 tablet:grid-cols-2">
          {repositories[0].frontEndRepositories.map((repo) => (
            <FrontEndProjectsCard
              key={repo.id}
              readme={repo.readme}
              description={repo.description}
              html_url={repo.html_url}
              name={repo.name}
              deployUrl={repo.deployUrl}
            />
          ))}
        </section>

        <h1 className="text-right text-white font-bold text-3xl mb-10">
          Take a look on my{' '}
          <span className="text-bold text-red-500">Back-End</span> Projects 🖨️
        </h1>
        <section className="flex flex-col items-center justify-center gap-6">
          {repositories[1].backEndRepositories.map((repo) => (
            <BackEndProjectsCard
              key={repo.id}
              readme={repo.readme}
              description={repo.description}
              html_url={repo.html_url}
              id={repo.id}
              name={repo.name}
              deployUrl={repo.deployUrl}
            />
          ))}
        </section>
        <h1 className="text-right text-white font-bold text-3xl my-10">
          My
          <span className="text-bold text-green-500"> Mobile</span> Projects 📱
        </h1>
        <section className="flex flex-col items-center justify-center gap-6">
          <div className="h-auto flex-1 w-[60vw] text-white hover:text-orange-500 transition-all duration-1000 hover:scale-105 flex flex-col justify-center items-center">
            <div className="text-6xl">⚒️</div>
            <h1 className="text-2xl font-bold  ">Under Construction...</h1>
            <span className="font-semibold text-sm">
              I`m building to bring you the best experience, be patiente 😆
            </span>
            <div className="bg-white w-full h-[0.5px] mt-4"></div>
          </div>
        </section>
        <footer className="mt-24">
          <h1 className="text-center text-white font-bold text-3xl mb-10">
            My{''}
            <span className="text-bold text-green-500"> Github</span> status 🐈‍⬛
          </h1>
          <div className="flex align-center justify-center gap-8 tablet:flex-col  mobile:flex-col mobile:gap-4">
            <img
              className="transition-all duration-1000 hover:scale-105"
              src="https://github-readme-stats.vercel.app/api?username=GabriellMatias&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
            />
            <img
              className="transition-all duration-1000 hover:scale-105"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=GabriellMatias&layout=compact&langs_count=7&theme=dark"
            />
          </div>
        </footer>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  RepositoriesPageProps
> = async () => {
  try {
    const response = await octokit.request('GET /users/GabriellMatias/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      per_page: 100,
    })

    const repositories = await Promise.all(
      response.data.map(async (repo: Repository) => {
        let readmeRepositoryResponse = null
        let deployUrlResponse = null
        let deployStatuseResponse = null
        try {
          readmeRepositoryResponse = await octokit.request(
            'GET /repos/{owner}/{repo}/readme',
            {
              owner: 'GabriellMatias',
              repo: repo.name,
            },
          )
          deployUrlResponse = await octokit.request(
            'GET /repos/{owner}/{repo}/deployments',
            {
              owner: 'gabriellMatias',
              repo: repo.name,
            },
          )
          deployStatuseResponse = await octokit.request(
            'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
            {
              owner: 'gabriellMatias',
              repo: repo.name,
              deployment_id: deployUrlResponse.data[0].id,
            },
          )
        } catch (error) {
          // Ignore the error and keep readmeRepositoryResponse as null
          console.log(error)
        }

        const decoding = readmeRepositoryResponse
          ? atob(readmeRepositoryResponse.data.content)
          : null
        const regex = /src="([^"]*)"/
        const match = decoding ? decoding.match(regex) : null
        const srcValue = match ? match[1] : null

        let deployUrl = null
        if (deployStatuseResponse) {
          if (deployStatuseResponse.data.length > 0) {
            deployUrl = deployStatuseResponse.data[0].target_url
          }
        }

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          readme: srcValue,
          deployUrl,
        }
      }),
    )

    const frontEndRepositories = repositories.filter((repo: Repository) => {
      const isSelected = repo.description
        ? repo.description.toLowerCase().includes('[front-end - portifolio]')
        : false

      return isSelected
    })

    const backEndRepositories = repositories.filter((repo: Repository) => {
      const isSelected = repo.description
        ? repo.description.toLowerCase().includes('[back-end - portifolio]')
        : false

      return isSelected
    })
    return {
      props: {
        repositories: [{ frontEndRepositories }, { backEndRepositories }],
      },
    }
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return {
      props: {
        repositories: [
          { frontEndRepositories: [] },
          { backEndRepositories: [] },
        ],
      },
    }
  }
}
