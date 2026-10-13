import { Link } from 'react-router-dom'

export function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-[32px] bg-[#fffaf7] p-8 text-center dark:bg-[#1a1413]">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Order confirmed</p>
      <h1 className="mt-4 font-serif text-5xl text-[#2d201b] dark:text-[#f9efe8]">Thank you for shopping with Kittu Studio.</h1>
      <p className="mt-5 text-base leading-8 text-[#4d3c38] dark:text-[#eed7c7]">
        Your order has been placed successfully. A confirmation email has been sent with tracking information and delivery updates.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/shop" className="rounded-full bg-[#201814] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Continue shopping</Link>
        <Link to="/" className="rounded-full border border-[#ead7cb] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#2d201b] dark:border-[#3d2d2a] dark:text-[#f8efe9]">Return home</Link>
      </div>
    </div>
  )
}
