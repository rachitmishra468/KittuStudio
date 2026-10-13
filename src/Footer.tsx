import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[#e9d9cd] bg-[#f8efe9] dark:border-[#342924] dark:bg-[#181312]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2d9c5] text-lg font-bold text-[#3f2f2a]">
                K
              </div>
              <div>
                <p className="font-serif text-3xl text-[#2f201d] dark:text-[#f4e3d7]">Kittu Studio</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#685650] dark:text-[#d9c2af]">
              Modern heirlooms for women who love to carry their confidence with quiet luxury and effortless femininity.
            </p>
            <div className="mt-5 flex gap-3 text-sm text-[#685650] dark:text-[#d9c2af]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#e8d9d0] px-3 py-1.5 dark:border-[#3d2c29]">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#e8d9d0] px-3 py-1.5 dark:border-[#3d2c29]">Facebook</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#e8d9d0] px-3 py-1.5 dark:border-[#3d2c29]">Pinterest</a>
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
