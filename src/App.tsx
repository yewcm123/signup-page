import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import SignUp from './pages/SignUp'

export default function App() {
  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        {
          path: '/',
          element: <Hero />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
      ],
    },
  ])

  return (
  <div>
    <RouterProvider router={router} />)
  </div>
  
}
