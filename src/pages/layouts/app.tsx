import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>header</h1>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  )
}
