import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import { useStore } from './store'

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductPage() {
  const { slug } = useParams()
  const { products, addToCart, toggleWishlist, isWishlisted } = useStore()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(() => {
    if (!product) {
      return []
    }

    return products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 4)
  }, [product, products])

  if (!product) {
    return (
      <div className="rounded-[30px] bg-[#fffaf7] p-10 text-center text-[#4d3c38] dark:bg-[#1a1413] dark:text-[#f5e8df]">
        <p className="text-lg font-medium">Product not found.</p>
        <Link to="/shop" className="mt-5 inline-flex rounded-full bg-[#201814] px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f9f0ea] dark:bg-[#f5e8df] dark:text-[#201814]">
          Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div className="rounded-[30px] bg-[#f9f2ee] p-6 dark:bg-[#1b1514] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-[#eadacb] bg-white shadow-[0_18px_45px_rgba(85,60,43,0.08)] dark:border-[#382d2a] dark:bg-[#271f1d]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-[560px] w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[18px] border ${selectedImage === index ? 'border-[#201814] dark:border-[#f5e8df]' : 'border-[#ebd8cd] dark:border-[#392f2d]'} bg-white p-1`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="h-24 w-full rounded-[14px] object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a27c68] dark:text-[#efd1b1]">{product.category}</p>
            <h1 className="mt-4 font-serif text-5xl text-[#2c1f1c] dark:text-[#f9efe8]">{product.name}</h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-[#5d4c47] dark:text-[#edd7c7]">
              <span>★ {product.rating}</span>
              <span>({product.reviews} reviews)</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <p className="text-3xl font-semibold text-[#201814] dark:text-[#f9efe8]">{formatPrice(product.price)}</p>
              <p className="text-lg text-[#8e7770] line-through dark:text-[#c7aaa0]">{formatPrice(product.originalPrice)}</p>
              <span className="rounded-full bg-[#f0dfd3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#684739] dark:bg-[#392a26] dark:text-[#f3d5c3]">{Math.round((1 - product.price / product.originalPrice) * 100)}% off</span>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#f0ceb4]">Description</p>
                <p className="mt-3 text-base leading-8 text-[#4d3c38] dark:text-[#ebd7ca]">{product.description}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#f0ceb4]">Material</p>
                <p className="mt-3 text-base text-[#362923] dark:text-[#f5e6db]">{product.material}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#f0ceb4]">Color</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(index)}
                      className={`rounded-full border px-4 py-2 text-sm ${
                        selectedColor === index
                          ? 'border-[#201814] bg-[#201814] text-[#f9efe8] dark:border-[#f5e8df] dark:bg-[#f5e8df] dark:text-[#201814]'
                          : 'border-[#ebd8cd] bg-white text-[#3a2d2a] dark:border-[#392f2d] dark:bg-[#251d1b] dark:text-[#f8efe9]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#f0ceb4]">Size</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(index)}
                      className={`rounded-full border px-4 py-2 text-sm ${
                        selectedSize === index
                          ? 'border-[#201814] bg-[#201814] text-[#f9efe8] dark:border-[#f5e8df] dark:bg-[#f5e8df] dark:text-[#201814]'
                          : 'border-[#ebd8cd] bg-white text-[#3a2d2a] dark:border-[#392f2d] dark:bg-[#251d1b] dark:text-[#f8efe9]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex h-14 items-center justify-between rounded-full border border-[#ead7cc] bg-white px-4 dark:border-[#3d2d2b] dark:bg-[#251d1c]">
                <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="text-2xl text-[#3a2d2a] dark:text-[#f8efe9]">−</button>
                <span className="min-w-8 text-center text-lg font-medium text-[#201814] dark:text-[#f9efe8]">{quantity}</span>
                <button type="button" onClick={() => setQuantity((current) => current + 1)} className="text-2xl text-[#3a2d2a] dark:text-[#f8efe9]">+</button>
              </div>
              <button
                type="button"
                onClick={() => addToCart(product.id, quantity)}
                className="h-14 flex-1 rounded-full bg-[#201814] px-6 text-sm font-medium uppercase tracking-[0.2em] text-[#f9f0ea] hover:bg-[#44352f] dark:bg-[#f6e9df] dark:text-[#201814]"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className="h-14 rounded-full border border-[#ead7cc] bg-white px-5 text-sm font-medium uppercase tracking-[0.18em] text-[#372d2a] dark:border-[#392f2d] dark:bg-[#251d1c] dark:text-[#f8efe9]"
              >
                {isWishlisted(product.id) ? 'Saved' : 'Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#eecbb0]">Related</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </section>
    </div>
  )
}
