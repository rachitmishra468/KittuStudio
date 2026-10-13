import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CartSidebar } from './CartSidebar'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-[#261d1a] transition-colors duration-300 dark:bg-[#120d0c] dark:text-[#f7efe8]">
      <Navbar />
      <CartSidebar />
      <main className="mx-auto max-w-[1440px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  )
}
