import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { ToastContainer } from 'react-toastify'
import { BalanceProvider } from './global/contextApi/BalanceContext'
import './App.css'
import { useDispatch } from 'react-redux'
import { domainSettings } from './redux/reducers/user_reducer'
import { useEffect } from 'react'
import { domainName } from './config/Auth'





function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      domainName: domainName,
    };
    dispatch(domainSettings(payload));
  }, []);



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
