import { ProductCard } from './ProductCard'
import { categories, type Product } from './data'
import { useStore } from './store'

export function ShopPage() {
  const { filteredProducts, selectedCategory, setSelectedCategory, priceCap, setPriceCap, sortBy, setSortBy } = useStore()

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ] as const

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(248,240,235,0.95),_rgba(234,213,195,0.7))] p-8 dark:bg-[radial-gradient(circle_at_top,_rgba(34,21,18,0.96),_rgba(22,17,15,0.96))]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a7d6a] dark:text-[#f0cdb2]">Luxury edit</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2b1f1b] dark:text-[#f9efe8]">Women&apos;s Bag Collection</h1>
        <p className="mt-3 text-base text-[#594842] dark:text-[#e7d0c0]">Every women&apos;s bag is just ₹499 for a limited time.</p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[290px_1fr]">
        <aside className="h-fit rounded-[30px] border border-[#ead9cf] bg-[#fffaf7] p-6 dark:border-[#382d2b] dark:bg-[#1b1514]">
          <div className="space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#9d7966] dark:text-[#f0cab1]">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition ${
                      selectedCategory === category
                        ? 'border-[#201814] bg-[#201814] text-[#f8efe8] dark:border-[#f6e9df] dark:bg-[#f6e9df] dark:text-[#201814]'
                        : 'border-[#e8d8cf] bg-white text-[#3e2d2a] dark:border-[#3d2b29] dark:bg-[#261e1d] dark:text-[#f8efe8]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#9d7966] dark:text-[#f0cab1]">Price cap</p>
              <div className="mt-4 flex items-center justify-between text-sm text-[#4a3a35] dark:text-[#f4e0d1]">
                <span>Up to</span>
                <span>₹{priceCap}</span>
              </div>
              <input
                type="range"
                min="200"
                max="499"
                value={priceCap}
                onChange={(event) => setPriceCap(Number(event.target.value))}
                className="mt-3 w-full accent-[#322824] dark:accent-[#f3d6c5]"
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#9d7966] dark:text-[#f0cab1]">Sort by</p>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as typeof sortBy)}
                className="mt-3 w-full rounded-full border border-[#ead7cb] bg-white px-4 py-3 text-sm text-[#2d201b] outline-none dark:border-[#3c2d2a] dark:bg-[#221c1a] dark:text-[#f8efe9]"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4 rounded-[30px] bg-[#f8f0eb] px-5 py-4 dark:bg-[#1e1716]">
            <p className="text-sm text-[#58463f] dark:text-[#f0d7c6]">
              {filteredProducts.length} designs available
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-[#79655a] dark:text-[#ebc7ad]">Luxury collection</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-[#dcc9ba] bg-[#fffaf7] p-10 text-center text-[#4c3b35] dark:border-[#3d2a28] dark:bg-[#1e1715] dark:text-[#f6e4d9] xl:col-span-3">
                No handbags match these filters. Try a different category or price limit.
              </div>
            ) : (
              filteredProducts.map((product: Product) => <ProductCard key={product.id} product={product} />)
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
