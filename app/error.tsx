"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"

type ErrorPageProps = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error({
      message: "A page failed to render",
      digest: error.digest,
      error,
    })
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md space-y-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">ShopFlow</p>
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="text-muted-foreground">
          We could not load this page. Please try again.
        </p>
        <Button onClick={() => unstable_retry()}>Try again</Button>
      </div>
    </main>
  )
}
