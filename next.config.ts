import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Config options here
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
