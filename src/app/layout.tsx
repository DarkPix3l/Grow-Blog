import type { Metadata } from 'next'
import '../../css/global.css'
import { Inria_Sans } from 'next/font/google'
import Header from './_components/header/Header'

const inriaSans = Inria_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Grow Blog',
    description:
        'Share your thoughts, tutorials, and stories, and let our tools translate your content seamlessly.',
    keywords: ['blog', 'tech', 'Next.js', 'tutorials'],
    authors: [{ name: 'Dark Pixel' }],
    openGraph: {
        title: 'Grow Blog',
        description:
            'Share your thoughts, tutorials, and stories, and let our tools translate your content seamlessly',
        url: 'https://your-site.com',
        siteName: 'Grow Blog',
        images: [''],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grow Blog',
        description:
            'A personal tech blog sharing tutorials, tips, and projects.',
        images: [''],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inriaSans.className}>
                <Header />

                {children}
            </body>
        </html>
    )
}
