import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Config options here
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        pathname: '/img/**',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      // https://nextjs.org/docs/app/guides/redirecting
      {
        source: '/article',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
