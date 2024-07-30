import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <main className="flex flex-1 gap-4 p-8 pt-6">
        <Outlet />
      </main>
    </div>
  )
}
