import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Toaster } from './components/ui/sonner'
import { Routes } from './pages/Routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <Routes />
    </HelmetProvider>
  )
}
