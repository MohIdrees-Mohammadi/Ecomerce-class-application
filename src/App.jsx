import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home"
import Auth from './pages/Auth'
import Layout from './pages/Layout'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },

  {
    path: "/auth",
    element: <Auth />
  },

  
])




const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App