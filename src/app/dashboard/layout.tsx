import Sidebar from '@/app/components/Sidebar'
import Topbar from '@/app/components/Topbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <Topbar />
        {children}
      </main>
    </>
  )
}
