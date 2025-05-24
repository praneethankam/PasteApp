import { useState } from 'react'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import Viewpaste from './components/Viewpaste'
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path:'/',
    element:
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:'/pastes',
    element:
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Paste/>
    </div>
  },
  {
    path:'/pastes/id',
    element:
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Viewpaste/>
    </div>
  },
])

function App() {


  return (
<div className='flex justify-center items-center  text-white  '>
    <RouterProvider router={router}/>
</div>
  )
}

export default App
