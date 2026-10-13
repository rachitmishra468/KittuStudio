import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function CheckoutPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    navigate('/order-confirmation')
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[32px] border border-[#ead8cf] bg-[#fffaf7] p-7 dark:border-[#392d2a] dark:bg-[#1d1716]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Checkout</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2d201b] dark:text-[#f9efe8]">Complete your order</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input placeholder="First name" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input placeholder="Last name" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          </div>
          <input placeholder="Street address" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          <div className="grid gap-4 md:grid-cols-3">
            <input placeholder="City" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input placeholder="State" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input placeholder="Postal code" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input placeholder="Email" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input placeholder="Phone" className="h-14 rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Payment method</p>
            <div className="flex flex-wrap gap-3">
              {['Credit card', 'UPI', 'Cash on delivery'].map((method) => (
                <button key={method} type="button" className="rounded-full border border-[#ead7cb] bg-white px-4 py-3 text-sm text-[#3a2d2a] dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]">
                  {method}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-[#f7efe9] p-4 dark:bg-[#221b1a]">
            <input placeholder="Coupon code" className="h-12 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
          </div>

          <button type="submit" className="h-14 w-full rounded-full bg-[#201814] text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Place order</button>
        </form>
      </section>

      <aside className="rounded-[32px] bg-[#f5e9df] p-6 dark:bg-[#1a1413]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Order summary</p>
        <div className="mt-6 space-y-4 text-sm text-[#473a34] dark:text-[#efdcc7]">
          <div className="flex justify-between"><span>Classic Tote</span><span>₹420</span></div>
          <div className="flex justify-between"><span>Amelia Shoulder</span><span>₹360</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
          <div className="flex justify-between"><span>Tax</span><span>₹62</span></div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-[#e9d7cb] pt-5 text-xl font-semibold text-[#201814] dark:border-[#3a2c29] dark:text-[#f9efe8]">
          <span>Total</span>
          <span>₹842</span>
        </div>
      </aside>
    </div>
  )
}
