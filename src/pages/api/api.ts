import { Octokit } from 'octokit'

export const octokit = new Octokit({
  baseUrl: 'https://api.github.com',
  auth: process.env.GITHUB_ACCESS_TOKEN,
})
