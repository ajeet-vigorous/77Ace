import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { ToastContainer } from 'react-toastify'
import { BalanceProvider } from './global/contextApi/BalanceContext'
import './App.css'





function App() {
    



  return (
    <>
      <ToastContainer />
      <BalanceProvider>
        <BrowserRouter>
          <Routes>
           
            <Route path="*" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </BalanceProvider>
    </>

  )
}

export default App
