import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard } from './app/dashboard'
import { SignIn } from './auth/sign-in'
import { AppLayout } from './layouts/app'
import { AuthLayout } from './layouts/auth'

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [{ path: '/', element: <Dashboard /> }],
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [{ path: '/sign-in', element: <SignIn /> }],
    },
  ])

  return <RouterProvider router={router} />
}
