'use client'
import { HomeIcon, Library, Search } from 'lucide-react'

import { useTheme } from 'next-themes'

export function Sidebar() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <aside className="w-72 bg-zinc-950 p-6 dark:bg-slate-50">
      <div className=" flex items-center gap-2 ">
        <div className=" w-3 h-3 bg-red-500 rounded-full"></div>
        <div className=" w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className=" w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <button
        type="button"
        aria-label="Toggle dark mode"
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

          resolvedTheme === 'dark'
            ? console.log('dark mode')
            : console.log('nlight')
        }}
      >
        Modo escuro
      </button>
      <nav className=" space-y-5 mt-10">
        <a
          href=""
          className=" flex items-center gap-3 text-sm font-semibold text-zinc-600 dark:text-zinc-00 "
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className=" flex items-center gap-3 text-sm font-semibold text-zinc-200  "
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className=" flex items-center gap-3 text-sm font-semibold text-zinc-200  "
        >
          <Library />
          Your Library
        </a>

        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
            Hot Hits Brazil
          </a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
            Aniver Funk
          </a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
            My Plalist
          </a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
            Top Brasils
          </a>
        </nav>
      </nav>
    </aside>
  )
}
