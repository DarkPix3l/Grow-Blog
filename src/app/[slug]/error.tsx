'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", height: "100vh", width:"100%" }}>
      <h2>Something went wrong!</h2>
      <button style={{padding:"0.5rem", borderRadius:"0.3rem", border:"1px solid braun"}}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}