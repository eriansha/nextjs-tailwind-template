import { Inter } from "@next/font/google"
import clsxm from "@/utils/clsxm"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center h-screen">
      <div className="m-auto">
        <h1 className={clsxm(inter.className, "text-4xl")}>
          Next.js + Tailwind with Typescript Starter Pack
        </h1>
      </div>
    </main>
  )
}
