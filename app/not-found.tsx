import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md space-y-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or may have moved.
        </p>
        <Button render={<Link href="/" />}>Return home</Button>
      </div>
    </main>
  )
}
