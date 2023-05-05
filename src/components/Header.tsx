'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Header() {
  return (
    <div className=" flex items-center gap-4">
      <button className="rounded-full bg-black/40 p-1 dark:bg-white ">
        <ChevronLeft />
      </button>
      <button className="rounded-full bg-black/40 p-1 ">
        <ChevronRight />
      </button>
    </div>
  )
}
