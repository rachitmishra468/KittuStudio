import { Link } from 'react-router-dom'
import { useStore } from './store'
import type { Product } from './data'

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, isWishlisted, toggleWishlist } = useStore()

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#eadccf] bg-white shadow-[0_18px_45px_rgba(94,61,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(94,61,40,0.12)] dark:border-[#3b2d2a] dark:bg-[#201816]">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-lg text-[#3f2f2a] backdrop-blur-sm transition hover:scale-105 dark:bg-[#2e2321] dark:text-[#f9efe7]"
          aria-label="Toggle wishlist"
        >
          {isWishlisted(product.id) ? '♥' : '♡'}
        </button>
        <span className="absolute left-4 top-4 rounded-full bg-[#201814] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white dark:bg-[#f5e8df] dark:text-[#201814]">
          50% off
        </span>
        {product.newArrival && (
          <span className="absolute bottom-4 left-4 rounded-full bg-[#f8f0ec] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#7a5649] dark:bg-[#2f2421] dark:text-[#f5d7c9]">
            New
          </span>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9d7a68] dark:text-[#d5b5a5]">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`} className="mt-2 block text-xl font-semibold text-[#2d201b] dark:text-[#f5e7dd]">
              {product.name}
            </Link>
          </div>
          <div className="text-right">
            <span className="block text-xs text-[#8e7770] line-through dark:text-[#c7aaa0]">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="block text-lg font-semibold text-[#2d201b] dark:text-[#f8f0ea]">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-[#705d56] dark:text-[#e7d4c5]">
            <span>★ {product.rating}</span>
            <span className="text-[#af8a78]">({product.reviews})</span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product.id, 1)}
            className="rounded-full bg-[#201814] px-4 py-2 text-sm font-medium text-[#f9f0ea] transition hover:bg-[#483930] dark:bg-[#f3e8de] dark:text-[#201814]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
