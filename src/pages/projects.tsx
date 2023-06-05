import React from 'react'
import { GetServerSideProps } from 'next'
import { api } from './api/api'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SelectedRepositorysIDs } from '@/utils/SelectedRepositorysIDS'

interface Repository {
  id: number
  name: string
  description: string
  url: string
}

interface RepositoriesPageProps {
  repositories: [
    { frontEndRepositorys: Repository[] },
    { backEndRepositorys: Repository[] },
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
            {repositories[0].frontEndRepositorys.map((repo) => (
              <li key={repo.id}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </li>
            ))}
            <hr className="mx-20 flex" />
            <h1>BACK END REPOS</h1>
          </ul>
          <ul>
            {repositories[1].backEndRepositorys.map((repo) => (
              <li key={repo.id}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </li>
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
    const response = await api.get('/users/GabriellMatias/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    })

    const repositories = response.data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
    }))

    const selectedFrontEndRepositoriesIds = SelectedRepositorysIDs.map((item) =>
      item.type === 'front-End' ? item.id : null,
    )
    const frontEndRepositorys = repositories.filter((repo: any) =>
      selectedFrontEndRepositoriesIds.includes(repo.id),
    )
    const selectedBackEndRepositoriesIds = SelectedRepositorysIDs.map((item) =>
      item.type === 'back-End' ? item.id : null,
    )
    const backEndRepositorys = repositories.filter((repo: any) =>
      selectedBackEndRepositoriesIds.includes(repo.id),
    )

    return {
      props: {
        repositories: [{ frontEndRepositorys }, { backEndRepositorys }],
      },
    }
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return {
      props: {
        repositories: [
          { frontEndRepositorys: null },
          { backEndRepositorys: null },
        ],
      },
    }
  }
}
