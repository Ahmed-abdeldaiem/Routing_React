import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './Components/HomeLayout/HomeLayout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Eror from './Components/Eror/Eror'
import ContactUs from './Components/Contact/ContactUs'

function App() {
  
  const route= createBrowserRouter([

    {path :'' ,element :<HomeLayout/> ,children:[
      {index:true ,element:<Home/>},
      {path:'about' ,element:<About/>},
      {path:'portfolio' ,element:<Portfolio/>},
      {path:"contact" ,element:<ContactUs/>},
      {path:"*" ,element:<Eror/>},

    ] }


  ])
  

  return <RouterProvider router={route}></RouterProvider>
    
  
}

export default App
