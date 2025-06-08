import { Outlet } from 'react-router-dom'
import { HeroUIProvider, ToastProvider } from '@heroui/react'
import Aside from './components/Aside'
import Header from './components/Header'
const Layout = () => {
  return (
    <HeroUIProvider locale='fr' className="w-full flex items-start z-[9999] text-black dark:text-white">
      <Aside />
      <section className="flex-grow flex flex-col min-h-screen min-w-0">
        <Header />
        <main className="bg-gray-100 dark:bg-gray-900 flex-1 transition-all z-[9997] p-2 overflow-hidden">
          <Outlet />
        </main>
      </section>
      <div className="z-[9999]">
        <ToastProvider placement="top-right" toastProps={{variant:'bordered'}} maxVisibleToasts={3}/>
      </div>
    </HeroUIProvider>
  )
}

export default Layout
