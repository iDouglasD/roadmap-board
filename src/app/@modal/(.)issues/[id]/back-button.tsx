'use client'

import { MoveLeftIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter()

  return (
    <button
      className="flex items-center gap-2 text-navy-200 hover:text-navy-100 cursor-pointer"
      type="button"
      onClick={() => router.back()}
    >
      <MoveLeftIcon className="size-4" />
      <span className="text-xs">Back to board</span>
    </button>
  )
}