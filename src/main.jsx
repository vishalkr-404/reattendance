import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactUs from './components/ContactUs.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  {
    path: "/contactus",
    element: <><div><Navbar /></div><ContactUs /></>
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <><Navbar /> <Login /></>
  },
  {
    path: "/about",
    element: <><Navbar /> <About /></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
