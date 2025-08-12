import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'
import MyAccount from '../../pages/myaccount/myaccount'
import Login from '../../pages/creadentialPage/Login'
import Promo from '../../pages/promo/Promo'
import AddCash from '../../pages/addcash/AddCash'
import AddBank from '../../pages/addcash/AddBank'
import PersonalInfo from '../../pages/myaccount/personalinfo/PersonalInfo'
import History from '../../pages/myaccount/history/History'
import Download from '../../pages/myaccount/download/Download'
import PaymentCollectionHistory from '../../pages/myaccount/paymentcollectionhistory/PaymentCollectionHistory'
import SignUp from '../../pages/creadentialPage/SignUp'
import Earn from '../../earn/Earn'






const AppContent = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/myaccount' element={<MyAccount />} />
    <Route path='/promo' element={<Promo />} />                      
    <Route path="/addcash" element={<AddCash />} />
    <Route path="/addbank" element={<AddBank />} />
    <Route path="/personalinfo" element={<PersonalInfo />} />
    <Route path='/login' element={<Login />} />
    <Route path='/history' element={<History />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/download' element={<Download />} />
    <Route path='/earn' element={<Earn />} />

    <Route path='/paymentcollectionhistory' element={<PaymentCollectionHistory />} />         
    </Routes>

  )
}

export default React.memo(AppContent)