import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Header />

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

      <Footer />
    </div>
  )
}
