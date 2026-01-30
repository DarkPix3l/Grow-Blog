'use client' // Error boundaries must be Client Components

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error & { digest?: string } }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <h2>Something went wrong!</h2>
            <button
                style={{ padding: '0.5rem', borderRadius: '0.3rem', border: '1px solid braun', cursor: 'pointer' }}
                onClick={
                    // changed to "back home" with default nextjs function
                    () => redirect('/')
                }
            >
                Try again
            </button>
        </div>
    )
}
