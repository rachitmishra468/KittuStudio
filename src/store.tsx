import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { categories, OFFER_PRICE, products as initialProducts, REGULAR_PRICE, type Product } from './data'

type CartItem = {
  productId: number
  quantity: number
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating'

type StoreContextValue = {
  products: Product[]
  cart: CartItem[]
  wishlist: number[]
  darkMode: boolean
  isCartOpen: boolean
  searchTerm: string
  selectedCategory: string
  priceCap: number
  sortBy: SortOption
  cartCount: number
  subtotal: number
  shipping: number
  tax: number
  total: number
  setSearchTerm: (value: string) => void
  setSelectedCategory: (value: string) => void
  setPriceCap: (value: number) => void
  setSortBy: (value: SortOption) => void
  toggleDarkMode: () => void
  toggleCart: () => void
  addToCart: (productId: number, quantity?: number) => void
  updateCartQuantity: (productId: number, quantity: number) => void
  removeFromCart: (productId: number) => void
  toggleWishlist: (productId: number) => void
  isWishlisted: (productId: number) => boolean
  addCatalogProduct: (product: Product) => void
  updateCatalogProduct: (productId: number, updates: Partial<Product>) => void
  deleteCatalogProduct: (productId: number) => void
  filteredProducts: Product[]
  notify: (message: string) => void
  toastMessage: string | null
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined)

const getStoredValue = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) {
      return fallback
    }
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() =>
    getStoredValue<Product[]>('kittu-catalog', initialProducts).map((product) => ({
      ...product,
      price: OFFER_PRICE,
      originalPrice: REGULAR_PRICE,
    })),
  )
  const [cart, setCart] = useState<CartItem[]>(() => getStoredValue('kittu-cart', []))
  const [wishlist, setWishlist] = useState<number[]>(() => getStoredValue('kittu-wishlist', []))
  const [darkMode, setDarkMode] = useState<boolean>(() => getStoredValue('kittu-dark-mode', false))
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceCap, setPriceCap] = useState(OFFER_PRICE)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    window.localStorage.setItem('kittu-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    window.localStorage.setItem('kittu-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    window.localStorage.setItem('kittu-dark-mode', JSON.stringify(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    window.localStorage.setItem('kittu-catalog', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    if (!toastMessage) {
      return
    }

    const timer = window.setTimeout(() => setToastMessage(null), 2200)
    return () => window.clearTimeout(timer)
  }, [toastMessage])

  const notify = (message: string) => {
    setToastMessage(message)
  }

  const addToCart = (productId: number, quantity = 1) => {
    setCart((current) => {
      const itemExists = current.find((item) => item.productId === productId)
      if (itemExists) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { productId, quantity }]
    })
    setIsCartOpen(true)
    notify('Added to cart')
  }

  const updateCartQuantity = (productId: number, quantity: number) => {
    setCart((current) =>
      current
        .map((item) => (item.productId === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId: number) => {
    setCart((current) => current.filter((item) => item.productId !== productId))
  }

  const toggleWishlist = (productId: number) => {
    setWishlist((current) =>
      current.includes(productId) ? current.filter((item) => item !== productId) : [...current, productId],
    )
    notify('Wishlist updated')
  }

  const isWishlisted = (productId: number) => wishlist.includes(productId)
  const toggleDarkMode = () => setDarkMode((current) => !current)
  const toggleCart = () => setIsCartOpen((current) => !current)

  const addCatalogProduct = (product: Product) => {
    setProducts((current) => [
      { ...product, price: OFFER_PRICE, originalPrice: REGULAR_PRICE },
      ...current,
    ])
  }

  const updateCatalogProduct = (productId: number, updates: Partial<Product>) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === productId
          ? { ...product, ...updates, price: OFFER_PRICE, originalPrice: REGULAR_PRICE }
          : product,
      ),
    )
  }

  const deleteCatalogProduct = (productId: number) => {
    setProducts((current) => current.filter((product) => product.id !== productId))
    setCart((current) => current.filter((item) => item.productId !== productId))
    setWishlist((current) => current.filter((item) => item !== productId))
  }

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return [...products]
      .filter((product) => {
        const passesSearch =
          query.length === 0 ||
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)

        const passesCategory =
          selectedCategory === 'All' || product.category === selectedCategory

        const passesPrice = product.price <= priceCap

        return passesSearch && passesCategory && passesPrice
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price
        if (sortBy === 'price-high') return b.price - a.price
        if (sortBy === 'rating') return b.rating - a.rating
        return Number(b.featured) - Number(a.featured) || Number(b.bestSeller) - Number(a.bestSeller)
      })
  }, [products, searchTerm, selectedCategory, priceCap, sortBy])

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  )

  const subtotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const product = products.find((entry) => entry.id === item.productId)
        return total + (product ? product.price * item.quantity : 0)
      }, 0),
    [cart, products],
  )

  const shipping = subtotal === 0 ? 0 : subtotal >= 250 ? 0 : 25
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const value = useMemo<StoreContextValue>(
    () => ({
      products,
      cart,
      wishlist,
      darkMode,
      isCartOpen,
      searchTerm,
      selectedCategory,
      priceCap,
      sortBy,
      cartCount,
      subtotal,
      shipping,
      tax,
      total,
      setSearchTerm,
      setSelectedCategory,
      setPriceCap,
      setSortBy,
      toggleDarkMode,
      toggleCart,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      toggleWishlist,
      isWishlisted,
      addCatalogProduct,
      updateCatalogProduct,
      deleteCatalogProduct,
      filteredProducts,
      notify,
      toastMessage,
    }),
    [products, cart, wishlist, darkMode, isCartOpen, searchTerm, selectedCategory, priceCap, sortBy, cartCount, subtotal, shipping, tax, total, filteredProducts, toastMessage],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used inside StoreProvider')
  }

  return context
}

export { categories }
