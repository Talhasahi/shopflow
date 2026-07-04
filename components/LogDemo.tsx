"use client"

import { Button } from "@/components/ui/button"

export function LogDemo() {
  function handleClick() {
    console.log("CLIENT: Button clicked")
  }

  return <Button onClick={handleClick}>Test client log</Button>
}