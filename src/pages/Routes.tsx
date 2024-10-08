import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { NotFound } from './404'
import { Dashboard } from './app/dashboard/dashboard'
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
      errorElement: <NotFound />,
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
