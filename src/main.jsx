import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Github from './Github.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='contact/' element={<Contact />}>
      <Route path=':userid' element={<Contact/>} />
    </Route>
    <Route path='github' element={<Github/>} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
