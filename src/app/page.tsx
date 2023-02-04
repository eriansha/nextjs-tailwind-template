import Title from "@/atoms/Title"

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center h-screen">
      <div className="m-auto">
        <Title level={1} className="text-4xl">
          Next.js + Tailwind with Typescript Starter Pack
        </Title>
      </div>
    </main>
  )
}
