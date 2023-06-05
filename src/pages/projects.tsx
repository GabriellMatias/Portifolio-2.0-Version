import React from 'react'
import { GetServerSideProps } from 'next'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { octokit } from './api/api'
import { ProjectsCards } from '@/components/projectsCard'

export interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  readme?: string
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
      <main>
        <div className="text-white">
          <h1>FRONT END REPOS</h1>
          <ul>
            {repositories[0].frontEndRepositories.map((repo) => (
              <ProjectsCards
                key={repo.id}
                readme={repo.readme}
                description={repo.description}
                html_url={repo.html_url}
                id={repo.id}
                name={repo.name}
              />
            ))}

            <h1>BACK END REPOS</h1>
          </ul>
          <ul>
            {repositories[1].backEndRepositories.map((repo) => (
              <ProjectsCards
                key={repo.id}
                readme={repo.readme}
                description={repo.description}
                html_url={repo.html_url}
                id={repo.id}
                name={repo.name}
              />
            ))}
          </ul>
        </div>
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
        try {
          readmeRepositoryResponse = await octokit.request(
            'GET /repos/{owner}/{repo}/readme',
            {
              owner: 'GabriellMatias',
              repo: repo.name,
            },
          )
        } catch (error) {
          // Ignore the error and keep readmeRepositoryResponse as null
        }

        const decoding = readmeRepositoryResponse
          ? atob(readmeRepositoryResponse.data.content)
          : null
        const regex = /src="([^"]*)"/
        const match = decoding ? decoding.match(regex) : null
        const srcValue = match ? match[1] : null

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          readme: srcValue,
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
