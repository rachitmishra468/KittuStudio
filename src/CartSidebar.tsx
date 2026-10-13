import { Link } from 'react-router-dom'
import { useStore } from './store'

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartSidebar() {
  const { cart, products, isCartOpen, toggleCart, updateCartQuantity, removeFromCart, subtotal, shipping, total } = useStore()

  if (!isCartOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#120d0b]/45 backdrop-blur-[2px]">
      <aside className="h-full w-full max-w-md overflow-y-auto border-l border-[#ead9cf] bg-[#fffaf7] p-6 shadow-2xl dark:border-[#352925] dark:bg-[#1d1816]">
        <div className="flex items-center justify-between border-b border-[#ead9cf] pb-4 dark:border-[#352925]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9c7a68] dark:text-[#ddbba7]">Cart</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#2d201b] dark:text-[#f5e7df]">Your bag</h3>
          </div>
          <button
            type="button"
            onClick={toggleCart}
            className="rounded-full border border-[#e8d9d0] px-3 py-1.5 text-sm text-[#2d201b] dark:border-[#3b2c2a] dark:text-[#f5e7df]"
          >
            Close
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {cart.length === 0 ? (
            <div className="rounded-[24px] border border-dashed border-[#dcc8bc] bg-[#fff8f4] p-8 text-center dark:border-[#483a36] dark:bg-[#241f1d]">
              <p className="text-lg font-medium text-[#3c2b26] dark:text-[#f2e6dd]">Your bag is empty.</p>
              <p className="mt-2 text-sm text-[#7a6159] dark:text-[#d5b8a8]">Add a few treasures to continue shopping.</p>
            </div>
          ) : (
            cart.map((item) => {
              const product = products.find((entry) => entry.id === item.productId)
              if (!product) {
                return null
              }

              return (
                <div key={item.productId} className="flex items-center gap-4 rounded-[22px] border border-[#f1e3da] bg-[#fffdfd] p-3 shadow-sm dark:border-[#392f2b] dark:bg-[#231d1b]">
                  <img src={product.images[0]} alt={product.name} className="h-20 w-16 rounded-[18px] object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#362923] dark:text-[#f3e8df]">{product.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8e6f61] dark:text-[#d3b7a6]">{product.category}</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 rounded-full border border-[#eaded5] px-2 py-1 dark:border-[#4c3934]">
                        <button type="button" onClick={() => updateCartQuantity(item.productId, item.quantity - 1)} className="text-lg leading-none">−</button>
                        <span className="min-w-5 text-center text-sm">{item.quantity}</span>
                        <button type="button" onClick={() => updateCartQuantity(item.productId, item.quantity + 1)} className="text-lg leading-none">+</button>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.productId)} className="text-xs uppercase tracking-[0.18em] text-[#9b7262]">
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-[#2e1f1a] dark:text-[#f9efe9]">{formatPrice(product.price * item.quantity)}</p>
                </div>
              )
            })
          )}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#f8f0ea] p-5 dark:bg-[#291f1d]">
          <div className="space-y-3 text-sm text-[#4b3b35] dark:text-[#f0e1d6]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatPrice(total * 0.08)}</span>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-[#e7d6cb] pt-4 text-lg font-semibold text-[#261c18] dark:border-[#4c3934] dark:text-[#f9efe8]">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link
            to="/checkout"
            onClick={toggleCart}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-[#201814] px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f9eee9] transition hover:bg-[#40342e] dark:bg-[#f2e7de] dark:text-[#201814]"
          >
            Checkout
          </Link>
        </div>
      </aside>
    </div>
  )
}
