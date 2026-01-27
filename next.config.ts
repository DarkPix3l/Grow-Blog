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
}

export default nextConfig
