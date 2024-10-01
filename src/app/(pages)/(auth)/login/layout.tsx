import Link from "next/link"

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <h1>LoginLayout</h1>
      <div>
        <Link href="/Home">Home</Link>
      </div>
      {children}
    </main>
  )
}
