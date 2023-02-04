import "./globals.css"
import { Space_Mono } from "@next/font/google"

const monospace = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-monospace",
  display: "auto",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={monospace.className}>{children}</body>
    </html>
  )
}
