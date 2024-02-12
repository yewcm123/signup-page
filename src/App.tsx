import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import SignUp from './pages/SignUp'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Hero />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}
