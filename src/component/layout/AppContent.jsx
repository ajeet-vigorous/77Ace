import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'
import MyAccount from '../../pages/myaccount/myaccount'





const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/myaccount' element={<MyAccount />} />
      
     
    </Routes>

  )
}

export default React.memo(AppContent)