import withMDX from '@next/mdx'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repoName?.endsWith('.github.io')
const basePath = isGithubPages && repoName && !isUserSite ? `/${repoName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath,
    assetPrefix: basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX()(nextConfig)
