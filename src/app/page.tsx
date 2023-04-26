import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className=" flex items-center gap-2 ">
            <div className=" w-3 h-3 bg-red-500 rounded-full"></div>
            <div className=" w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className=" w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className=" space-y-5 mt-10">
            <a
              href=""
              className=" flex items-center gap-3 text-sm font-semibold text-zinc-200  "
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
        <main className="flex-1 p-6">
          <div className=" flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 ">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1 ">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semiboldbold text-3xl mt-10">Good Afternoon</h1>

          <div className=" grid grid-cols-3 gap-4 mt-4  ">
            <a
              href="#"
              className=" bg-white/10 rounded-lg flex items-center gap-8 overflow-hidden hover:bg-white/20 transition-colors group "
            >
              <Image
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong>Queen </strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className=" bg-white/10 rounded-lg flex items-center gap-8 overflow-hidden hover:bg-white/20 transition-colors group "
            >
              <Image
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong>Queen </strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className=" bg-white/10 rounded-lg flex items-center gap-8 overflow-hidden hover:bg-white/20 transition-colors group "
            >
              <Image
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong>Queen </strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className=" bg-white/10 rounded-lg flex items-center gap-8 overflow-hidden hover:bg-white/20 transition-colors group "
            >
              <Image
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong>Queen </strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className=" bg-white/10 rounded-lg flex items-center gap-8 overflow-hidden hover:bg-white/20 transition-colors group "
            >
              <Image
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong>Queen </strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className=" bg-white/10 rounded-lg flex items-center gap-8 overflow-hidden hover:bg-white/20 transition-colors group "
            >
              <Image
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong>Queen </strong>
              <button className=" w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8  invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semiboldbold text-2xl mt-10">Made for Giovani</h2>

          <div className=" grid grid-cols-8 gap-4 mt-4 ">
            <a
              href=""
              className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              <Image
                className="w-full"
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong className=" font-semibold ">Daily Mix 1</strong>
              <span className=" text-sm text-zinc-500 ">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              <Image
                className="w-full"
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong className=" font-semibold ">Daily Mix 1</strong>
              <span className=" text-sm text-zinc-500 ">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              <Image
                className="w-full"
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong className=" font-semibold ">Daily Mix 1</strong>
              <span className=" text-sm text-zinc-500 ">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              <Image
                className="w-full"
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong className=" font-semibold ">Daily Mix 1</strong>
              <span className=" text-sm text-zinc-500 ">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              <Image
                className="w-full"
                src="/capa.jpg"
                alt="capa queen"
                width={104}
                height={104}
              />
              <strong className=" font-semibold ">Daily Mix 1</strong>
              <span className=" text-sm text-zinc-500 ">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  )
}
