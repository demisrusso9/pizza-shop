import { Helmet, HelmetProvider } from 'react-helmet-async'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { Routes } from './pages/Routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />

      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Routes />
      </ThemeProvider>
    </HelmetProvider>
  )
}
