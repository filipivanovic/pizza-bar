import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home.jsx'
import Error from './ui/Error.jsx'
import Menu, { loader as menuLoader } from './features/menu/Menu.jsx'
import Order, { loader as orderLoader } from './features/order/Order.jsx'
import Cart from './features/cart/Cart.jsx'
import CreateOrder, { action as createOrderAction } from './features/order/CreateOrder.jsx'
import AppLayout from './ui/AppLayout.jsx'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App