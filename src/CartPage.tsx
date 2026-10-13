import { Link } from 'react-router-dom'
import { useStore } from './store'

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartPage() {
  const { cart, products, removeFromCart, updateCartQuantity, subtotal, shipping, total } = useStore()

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(248,240,235,0.95),_rgba(234,213,195,0.7))] p-8 dark:bg-[radial-gradient(circle_at_top,_rgba(34,21,18,0.96),_rgba(22,17,15,0.96))]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a7d6a] dark:text-[#f0cdb2]">Shopping bag</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2b1f1b] dark:text-[#f9efe8]">Your cart</h1>
      </section>

      {cart.length === 0 ? (
        <div className="rounded-[30px] bg-[#fffaf7] p-10 text-center text-[#4d3c38] dark:bg-[#1a1413] dark:text-[#f5e8df]">
          <p className="text-lg font-medium">Your bag is empty.</p>
          <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[#201814] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {cart.map((item) => {
              const product = products.find((entry) => entry.id === item.productId)
              if (!product) return null

              return (
                <div key={item.productId} className="flex flex-col gap-4 rounded-[28px] border border-[#eadccf] bg-[#fffaf7] p-4 shadow-sm sm:flex-row dark:border-[#382d2a] dark:bg-[#1d1716]">
                  <img src={product.images[0]} alt={product.name} className="h-40 w-full rounded-[20px] object-cover sm:w-40" />
                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[#9c7a68] dark:text-[#efcbb0]">{product.category}</p>
                        <h2 className="mt-2 text-xl font-semibold text-[#2d201b] dark:text-[#f8efe8]">{product.name}</h2>
                      </div>
                      <p className="text-lg font-semibold text-[#201814] dark:text-[#f9efe8]">{formatPrice(product.price * item.quantity)}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 rounded-full border border-[#ead6ca] px-2 py-1 dark:border-[#3d2d2a]">
                        <button type="button" onClick={() => updateCartQuantity(item.productId, item.quantity - 1)} className="text-xl">−</button>
                        <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                        <button type="button" onClick={() => updateCartQuantity(item.productId, item.quantity + 1)} className="text-xl">+</button>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.productId)} className="text-xs uppercase tracking-[0.2em] text-[#8e6a5d]">Remove</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <aside className="rounded-[30px] bg-[#f5e9df] p-6 dark:bg-[#1a1413]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Order summary</p>
            <div className="mt-7 space-y-4 text-sm text-[#473a34] dark:text-[#efdcc7]">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
              <div className="flex justify-between"><span>Tax</span><span>{formatPrice(total * 0.08)}</span></div>
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-[#e9d7cb] pt-5 text-xl font-semibold text-[#201814] dark:border-[#3a2c29] dark:text-[#f9efe8]">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Link to="/checkout" className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-[#201814] text-sm font-medium uppercase tracking-[0.18em] text-[#f9f0ea] dark:bg-[#f4e9de] dark:text-[#201814]">Checkout</Link>
          </aside>
        </div>
      )}
    </div>
  )
}
