import { Link } from 'react-router-dom'
import logo from './logo.jpg'

export function Footer() {
  return (
    <footer className="border-t border-[#e9d9cd] bg-[#f8efe9] dark:border-[#342924] dark:bg-[#181312]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kittu Studio logo" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="font-serif text-3xl text-[#2f201d] dark:text-[#f4e3d7]">Kittu Studio</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#685650] dark:text-[#d9c2af]">
              Modern heirlooms for women who love to carry their confidence with quiet luxury and effortless femininity.
            </p>
            <div className="mt-5 flex gap-3 text-sm text-[#685650] dark:text-[#d9c2af]">
              <a href="https://www.instagram.com/kittu.studio?vrfl=bjI5NTU0cTVmdTd2" target="_blank" rel="noreferrer" className="rounded-full border border-[#e8d9d0] px-3 py-1.5 dark:border-[#3d2c29]">Instagram</a>
              <a href="https://www.facebook.com/share/1EuKSfUrgd/" target="_blank" rel="noreferrer" className="rounded-full border border-[#e8d9d0] px-3 py-1.5 dark:border-[#3d2c29]">Facebook</a>
              <a href="https://www.threads.com/@kittu.studio" target="_blank" rel="noreferrer" className="rounded-full border border-[#e8d9d0] px-3 py-1.5 dark:border-[#3d2c29]">Threads</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6a564d] dark:text-[#f0d8c6]">Shop</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#4d3d39] dark:text-[#edd7cb]">
              <li><Link to="/shop">New In</Link></li>
              <li><Link to="/shop">Best Sellers</Link></li>
              <li><Link to="/shop">Handbags</Link></li>
              <li><Link to="/shop">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6a564d] dark:text-[#f0d8c6]">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#4d3d39] dark:text-[#edd7cb]">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/about">Craftsmanship</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6a564d] dark:text-[#f0d8c6]">Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#4d3d39] dark:text-[#edd7cb]">
              <li><Link to="/checkout">Shipping Info</Link></li>
              <li><Link to="/auth">Login</Link></li>
              <li><Link to="/contact">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#ead9cf] pt-5 text-sm text-[#624f46] dark:border-[#312825] dark:text-[#d9c0ad] md:flex-row md:items-center">
          <p>© 2026 Kittu Studio. Crafted for everyday grand entrances.</p>
          <div className="flex gap-4">
            <a href="/" className="hover:text-[#2f201d] dark:hover:text-[#f7eae1]">Privacy</a>
            <a href="/" className="hover:text-[#2f201d] dark:hover:text-[#f7eae1]">Terms</a>
            <a href="/" className="hover:text-[#2f201d] dark:hover:text-[#f7eae1]">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
