import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard } from './app/dashboard'
import { Orders } from './app/orders/orders'
import { SignIn } from './auth/sign-in'
import { SignUp } from './auth/sign-up'
import { AppLayout } from './layouts/app'
import { AuthLayout } from './layouts/auth'

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/orders', element: <Orders /> },
      ],
    },
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        { path: '/sign-in', element: <SignIn /> },
        { path: '/sign-up', element: <SignUp /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
