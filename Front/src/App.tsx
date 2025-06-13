import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Orders from './pages/Orders'
import AboutService from './pages/AboutService'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/walls',
    element: <AboutService />,
  },
  {
    path: '/floor',
    element: <AboutService />,
  },
  {
    path: '/plumbing',
    element: <AboutService />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
