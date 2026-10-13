import { useState } from 'react'
import { useStore } from './store'

export function AdminPage() {
  const { products, addCatalogProduct, updateCatalogProduct, deleteCatalogProduct } = useStore()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Totes')
  const [price, setPrice] = useState(420)

  const handleAddProduct = () => {
    addCatalogProduct({
      id: Date.now(),
      slug: `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-new`,
      name,
      category,
      price,
      rating: 4.8,
      reviews: 0,
      images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'],
      description: 'New luxury handbag added from the admin dashboard.',
      material: 'Premium leather',
      sizes: ['Small', 'Medium'],
      colors: ['Champagne', 'Black'],
      stock: 10,
      featured: true,
      newArrival: true,
      bestSeller: false,
    })
    setName('')
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(248,240,235,0.95),_rgba(234,213,195,0.7))] p-8 dark:bg-[radial-gradient(circle_at_top,_rgba(34,21,18,0.96),_rgba(22,17,15,0.96))]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a7d6a] dark:text-[#f0cdb2]">Admin</p>
        <h1 className="mt-4 font-serif text-5xl text-[#2b1f1b] dark:text-[#f9efe8]">Inventory dashboard</h1>
      </section>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[30px] border border-[#ead8cf] bg-[#fffaf7] p-6 dark:border-[#392d2a] dark:bg-[#1d1716]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Add product</p>
          <div className="mt-6 space-y-4">
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Product name" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} placeholder="Price" className="h-14 w-full rounded-full border border-[#ead7cb] bg-white px-4 text-sm outline-none dark:border-[#3b2d2a] dark:bg-[#251f1d] dark:text-[#f8efe9]" />
            <button type="button" onClick={handleAddProduct} className="h-14 w-full rounded-full bg-[#201814] text-sm font-medium uppercase tracking-[0.18em] text-[#f9efe8] dark:bg-[#f4e9de] dark:text-[#201814]">Add product</button>
          </div>
        </section>

        <section className="space-y-5 rounded-[30px] border border-[#ead8cf] bg-[#fffaf7] p-6 dark:border-[#392d2a] dark:bg-[#1d1716]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">Inventory</p>
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="flex items-center justify-between gap-4 rounded-[22px] border border-[#efdfd5] bg-white p-4 dark:border-[#3d2d2a] dark:bg-[#211b1a]">
              <div>
                <p className="text-lg font-medium text-[#2d201b] dark:text-[#f9efe8]">{product.name}</p>
                <p className="mt-1 text-sm text-[#6f5650] dark:text-[#e5cebd]">{product.category} • ₹{product.price}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => updateCatalogProduct(product.id, { price: product.price + 20 })} className="rounded-full border border-[#ead7cb] px-3 py-2 text-xs uppercase tracking-[0.18em] dark:border-[#3a2d2a]">Edit</button>
                <button type="button" onClick={() => deleteCatalogProduct(product.id)} className="rounded-full border border-[#ead7cb] px-3 py-2 text-xs uppercase tracking-[0.18em] dark:border-[#3a2d2a]">Delete</button>
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="grid gap-6 md:grid-cols-4">
        {[
          { value: '₹2.4L', label: 'Revenue' },
          { value: '1,280', label: 'Orders' },
          { value: '92%', label: 'Conversion' },
          { value: '348', label: 'Customers' },
        ].map((card) => (
          <div key={card.label} className="rounded-[28px] border border-[#ead8cf] bg-[#fffaf7] p-6 dark:border-[#392d2a] dark:bg-[#1d1716]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9f7b69] dark:text-[#efcab0]">{card.label}</p>
            <h3 className="mt-4 font-serif text-4xl text-[#2d201b] dark:text-[#f9efe8]">{card.value}</h3>
          </div>
        ))}
      </section>
    </div>
  )
}
