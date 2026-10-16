import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import { useStore } from './store'
import banner from './banner.jpg'

const testimonials = [
  {
    quote:
      'The craftsmanship feels exceptional. Every detail feels considered, and the colour palette is absolutely refined.',
    name: 'Aarohi Mehta',
    role: 'Creative Lead',
  },
  {
    quote:
      'My Kittu tote feels like the perfect fusion of elegance and practicality. I receive compliments every single time.',
    name: 'Sana Verma',
    role: 'Stylist',
  },
  {
    quote:
      'It looks luxurious without feeling excessive. The quality and finish are truly premium.',
    name: 'Naina Kaur',
    role: 'Fashion Buyer',
  },
]

export function HomePage() {
  const { products } = useStore()

  const featured = products.filter((product) => product.featured).slice(0, 4)
  const arrivals = products.filter((product) => product.newArrival).slice(0, 4)
  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4)

  return (
    <div className="space-y-16 pb-10">
      <section className="overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(252,248,245,0.95),_rgba(236,221,210,0.95)_32%,_rgba(198,165,146,0.9))] shadow-[0_30px_80px_rgba(63,46,36,0.12)] dark:bg-[radial-gradient(circle_at_top,_rgba(43,31,29,0.96),_rgba(21,16,14,0.96)_48%,_rgba(34,27,24,0.96))]">
        <img src={banner} alt="Kittu Studio trendy bags collection" className="w-full object-cover" />
        <div className="px-6 py-10 lg:px-12 lg:py-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#7c6359] dark:text-[#efcdb4]">Women&apos;s bags • ₹999, now ₹499</p>
            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-none text-[#271d1a] sm:text-6xl dark:text-[#f8efe7]">
              Modern heirlooms for grander days.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#4f3d38] dark:text-[#ead4c7]">
              Discover luxury handbags crafted for the woman who moves through every room with quiet confidence, impeccable taste, and an eye for detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="rounded-full bg-[#201814] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f8efe9] hover:bg-[#3b2d29] dark:bg-[#f6e9df] dark:text-[#201814]">
                Shop Collection
              </Link>
              <Link to="/about" className="rounded-full border border-[#c7a996] bg-white/40 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#2d201b] dark:border-[#5a413b] dark:bg-[#201916]/60 dark:text-[#f5e8df]">
                Our Story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#4d3d39] dark:text-[#ebd7c8]">
              <div>
                <p className="text-3xl font-semibold text-[#221b19] dark:text-[#faeee4]">250k+</p>
                <span>happy clients</span>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#221b19] dark:text-[#faeee4]">4.9/5</p>
                <span>average rating</span>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[#221b19] dark:text-[#faeee4]">24H</p>
                <span>dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Italian Leather', text: 'Only finest grained textures sourced globally.' },
          { title: 'Luxury Finish', text: 'Hand-polished hardware and elegant detailing.' },
          { title: 'Limited Editions', text: 'Fresh seasonal capsules with exceptional charm.' },
          { title: 'Worldwide Delivery', text: 'Complimentary shipping on orders above ₹2500.' },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-[#eaded3] bg-[#fffaf7] p-6 shadow-[0_16px_36px_rgba(96,69,51,0.05)] dark:border-[#372d2a] dark:bg-[#1d1716]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#9a7a69] dark:text-[#efc9b0]">Signature</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#2d201b] dark:text-[#f6eadf]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#5d4b45] dark:text-[#e8d3c2]">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="pt-6">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#f0c5a7]">Brand story</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">Crafted for femininity and freedom.</h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[30px] border border-[#eadbce] bg-[#fff8f4] p-6 dark:border-[#3a2b29] dark:bg-[#1f1715]">
            <p className="text-base leading-8 text-[#4c3a35] dark:text-[#eed9c9]">
              Kittu Studio was founded with a single philosophy: every woman deserves a handbag that feels as elevated as she does. We design modern classics that move from morning meetings to late-evening celebrations with effortless ease.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl font-semibold text-[#201814] dark:text-[#f9efe5]">12+</h3>
                <p className="mt-2 text-sm text-[#6b5650] dark:text-[#e8d2c2]">Years of craftsmanship</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-[#201814] dark:text-[#f9efe5]">35</h3>
                <p className="mt-2 text-sm text-[#6b5650] dark:text-[#e8d2c2]">Design artisans</p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-[#201814] dark:text-[#f9efe5]">98%</h3>
                <p className="mt-2 text-sm text-[#6b5650] dark:text-[#e8d2c2]">Repeat customers</p>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Designer handbag close up"
            className="h-full min-h-[300px] w-full rounded-[30px] object-cover shadow-[0_22px_52px_rgba(92,59,42,0.12)]"
          />
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#efd0b7]">Featured</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">Featured handbag collection</h2>
          </div>
          <Link to="/shop" className="text-sm uppercase tracking-[0.16em] text-[#533d35] dark:text-[#efd9c9]">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#efd0b7]">New arrivals</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">Fresh edits for the season</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#efd0b7]">Best sellers</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">Loved by our community</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Totes', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80' },
          { title: 'Satchels', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80' },
          { title: 'Crossbody', image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=900&q=80' },
          { title: 'Statement', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
        ].map((category) => (
          <div key={category.title} className="group relative overflow-hidden rounded-[30px] border border-[#ecd9cf] bg-[#fff8f4] shadow-[0_18px_42px_rgba(89,60,44,0.08)] dark:border-[#3b2d2a] dark:bg-[#1e1715]">
            <img src={category.image} alt={category.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a120f]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#f6e8df]">Shop by category</p>
              <h3 className="mt-2 font-serif text-3xl text-white">{category.title}</h3>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] bg-[#f4e9df] p-6 md:p-8 dark:bg-[#1d1715]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#efc9b0]">Client love</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">What our customers say</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[26px] border border-[#e9d7cb] bg-white p-6 shadow-sm dark:border-[#392f2d] dark:bg-[#231d1b]">
              <p className="text-lg leading-8 text-[#483a35] dark:text-[#f3e3d7]">“{item.quote}”</p>
              <footer className="mt-6 border-t border-[#ecddd3] pt-4 dark:border-[#3d2b29]">
                <p className="font-semibold text-[#201814] dark:text-[#faefe7]">{item.name}</p>
                <p className="text-sm text-[#7e655d] dark:text-[#d8b9a5]">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-[#f9f2ee] p-6 shadow-[0_18px_42px_rgba(82,58,46,0.06)] dark:bg-[#191312] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#efc9b0]">Newsletter</p>
            <h2 className="mt-3 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">Join the Kittu Studio list.</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#594842] dark:text-[#e7d0c0]">
              Be the first to hear about new drops, private releases, and seasonal edits handpicked for your wardrobe.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-[#e7d9d1] bg-white px-4 text-sm text-[#312823] outline-none placeholder:text-[#8d7266] dark:border-[#3c2d2a] dark:bg-[#231c19] dark:text-[#f9efe9]"
            />
            <button type="button" className="h-14 rounded-full bg-[#201814] px-6 text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f6e9df] dark:text-[#201814]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a47d69] dark:text-[#efc9b0]">Instagram</p>
            <a href="https://www.instagram.com/kittu.studio?vrfl=bjI5NTU0cTVmdTd2" target="_blank" rel="noreferrer" className="mt-3 inline-block font-serif text-4xl text-[#2d201b] hover:underline dark:text-[#f9efe8]">@kittu.studio</a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1591957839841-5d2d9d03994f?auto=format&fit=crop&w=900&q=80',
          ].map((image) => (
            <img key={image} src={image} alt="Luxury handbag lifestyle" className="h-72 w-full rounded-[26px] object-cover shadow-[0_16px_40px_rgba(80,57,44,0.08)]" />
          ))}
        </div>
      </section>
    </div>
  )
}
