import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from './store'
import logo from './logo.jpg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { cartCount, darkMode, toggleDarkMode, toggleCart } = useStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#eadccf] bg-[#f9f3ee]/90 backdrop-blur-xl dark:border-[#352c2a] dark:bg-[#171211]/90">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kittu Studio logo" className="h-11 w-11 rounded-full object-cover shadow-sm" />
          <div>
            <p className="font-serif text-3xl leading-none text-[#2d201b] dark:text-[#f8efe8]">Kittu Studio</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#493935] lg:flex dark:text-[#f2e1d4]">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-[#201814]' : 'text-[#5d4b45] hover:text-[#201814] dark:text-[#e9d4c7] dark:hover:text-[#fff]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="hidden rounded-full border border-[#e8d9d0] bg-[#fff7f3] px-3 py-2 text-sm text-[#2d201b] transition hover:bg-[#f7e5dc] md:inline-flex dark:border-[#352b29] dark:bg-[#231d1c] dark:text-[#f2eae4]"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <NavLink
            to="/auth"
            className="hidden rounded-full border border-[#e8d9d0] bg-[#fff7f3] px-4 py-2 text-sm font-medium text-[#2d201b] transition hover:bg-[#f7e5dc] md:inline-flex dark:border-[#352b29] dark:bg-[#231d1c] dark:text-[#f2eae4]"
          >
            Login
          </NavLink>
          <button
            type="button"
            onClick={toggleCart}
            className="relative rounded-full bg-[#201814] px-4 py-2.5 text-sm font-medium text-[#f5ebdf] transition hover:bg-[#41342d] dark:bg-[#f4e9de] dark:text-[#201814]"
          >
            Bag
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d7b29d] px-1 text-[10px] font-bold text-[#201814]">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="rounded-full border border-[#e8d9d0] bg-[#fff7f3] px-3 py-2 text-sm text-[#2d201b] lg:hidden dark:border-[#352b29] dark:bg-[#231d1c] dark:text-[#f2eae4]"
          >
            Menu
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#eadccf] bg-[#f8f0eb] px-4 py-4 lg:hidden dark:border-[#352b29] dark:bg-[#171211]">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="rounded-full border border-[#ecdaca] px-3 py-2 text-[#463b36] dark:border-[#352e2d] dark:text-[#f0e2d6]">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
