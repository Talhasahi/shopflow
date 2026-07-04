"use client"

import { useEffect } from "react"

type GlobalErrorProps = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  useEffect(() => {
    console.error({
      message: "The application failed to render",
      digest: error.digest,
      error,
    })
  }, [error])

  return (
    <html lang="en">
      <body>
        <main
          style={{
            display: "grid",
            minHeight: "100vh",
            placeItems: "center",
            padding: "1.5rem",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ maxWidth: "28rem", textAlign: "center" }}>
            <p>ShopFlow</p>
            <h1>Something went seriously wrong</h1>
            <p>Please try loading the application again.</p>
            <button onClick={() => unstable_retry()}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  )
}
