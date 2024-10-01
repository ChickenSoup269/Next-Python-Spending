export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <h1>HomeLayout</h1>
      {children}
    </main>
  )
}
