import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { StoreProvider } from './store'
import { HomePage } from './HomePage'
import { ShopPage } from './ShopPage'
import { ProductPage } from './ProductPage'
import { AboutPage } from './AboutPage'
import { ContactPage } from './ContactPage'
import { CartPage } from './CartPage'
import { CheckoutPage } from './CheckoutPage'
import { AuthPage } from './AuthPage'
import { AdminPage } from './AdminPage'
import { OrderConfirmationPage } from './OrderConfirmationPage'

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
