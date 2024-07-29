import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard } from './app/dashboard'
import { SignIn } from './auth/sign-in'

export function Routes() {
  const router = createBrowserRouter([
    { path: '/', element: <Dashboard /> },
    { path: '/sign-in', element: <SignIn /> },
  ])

  return <RouterProvider router={router} />
}
