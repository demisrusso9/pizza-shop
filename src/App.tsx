import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Routes } from './pages/Routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Routes />
    </HelmetProvider>
  )
}
