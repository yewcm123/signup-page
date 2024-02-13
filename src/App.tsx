import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/hero',
      element: <Hero />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/home',
      element: <Home />,
    }
  ])

  return (
      <RouterProvider router={router} />
  )
}
