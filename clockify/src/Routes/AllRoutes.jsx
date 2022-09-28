import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DownLoad from '../Pages/DownLoad'
import Features from '../Pages/Features'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/features' element={<Features />} />
    <Route path='/download' element={<DownLoad />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />

   </Routes>
   </>
  )
}

export default AllRoutes