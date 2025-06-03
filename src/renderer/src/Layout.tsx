import { Outlet } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import Aside from './components/Aside'
import Header from './components/Header'
const Layout = () => {
  return (
    <HeroUIProvider className="w-full flex items-start z-[9999] text-black dark:text-white">
      <Aside />
      <section className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="bg-gray-100 dark:bg-slate-900  flex-1 transition-all z-[9997] p-2 overflow-hidden">
          <Outlet />
        </main>
      </section>
    </HeroUIProvider>
  )
}

export default Layout
