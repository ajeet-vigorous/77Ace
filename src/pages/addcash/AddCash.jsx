import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addcashJson } from '../../config/global';
import PaymentScreen from './PaymentScreen';
import Withdraw from './Withdraw';

const AddCash = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('addcash');
    const [activeChannel, setActiveChannel] = useState('');
    const [paymentScreen, setPaymentScreen] = useState('addcash');
    const [screen, setScreen] = useState('Add Cash');
    const [amount, setAmount] = useState();
    const amounts = [100, 300, 500, 1000, 2000, 3000, 5000, 10000, 20000];

 useEffect(() => {
    if (location.state?.defaultTab === 'withdraw') {
      setActiveTab('withdraw');
      setScreen('Withdraw');
      setPaymentScreen('withdraw');
     
    }
  }, [location.state]);
    
  return (
    <div className="w-ful p-6  ">
       <div className='flex px-3 rounded-[5px] items-center justify-start gap-40'>
       <img onClick={() => navigate(-1)} className='cursor-pointer w-[35px] h-[35px]' src="/backbutton/back-button.webp" alt="" />    
       <span className='text-white text-[19px] whitespace-nowrap  font-semibold'>{screen}</span>    
       </div>
       <div className='grid  mt-6 bg-white/5 backdrop-blur-sm h-[56px] grid-cols-2 items-center justify-center ' style={{boxShadow:'0.2px -0.2px  white'}}>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('addcash');setPaymentScreen('addcash');setScreen('Add Cash')}}>
       
      <div  className='flex flex-col  relative h-full  items-center justify-center '>
      <span className={`text-white p-2 text-[16px] font-semibold`}>Add Cash</span> 
      {activeTab == 'addcash' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>
       
            
        </div>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('withdraw');setPaymentScreen('withdraw');setScreen('Withdraw')}}>
       
      <div   className='flex flex-col  relative h-full  items-center justify-center '>
      <span className='text-white p-2 text-[16px] font-semibold'>Withdraw</span> 
      {activeTab === 'withdraw' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>

       
            
        </div>

    
        
       </div>
       


        
        <div className="overflow-auto h-[calc(100vh-100px)] hide-scrollbar">
      <PaymentScreen paymentScreen={paymentScreen} setPaymentScreen={setPaymentScreen} activeChannel={activeChannel} setActiveChannel={setActiveChannel} amount={amount} setAmount={setAmount} amounts={amounts} addcashJson={addcashJson}/>
      <Withdraw paymentScreen={paymentScreen} setPaymentScreen={setPaymentScreen} activeChannel={activeChannel} setActiveChannel={setActiveChannel} amount={amount} setAmount={setAmount} amounts={amounts} addcashJson={addcashJson}/>
    </div>
    </div>
  
  )
}

export default AddCash