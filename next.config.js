/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/about/index': { page: '/about' },
    }
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
  
}

module.exports = nextConfig
