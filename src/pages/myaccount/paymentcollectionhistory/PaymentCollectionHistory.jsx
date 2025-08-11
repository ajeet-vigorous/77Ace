import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PaymentCollectionHistory = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('withdraw');
      const [activeTabDays, setActiveTabDays] = useState("1 Day");
      const tabs = ["1 Day", "7 Day", "30 Day"];
    const [screen, setScreen] = useState('History');


    
  return (
    <div className="w-ful  ">
        <div className='p-5'>
       <div className='flex px-3  rounded-[5px] items-center justify-start gap-40'>
       <img onClick={() => navigate(-1)} className='cursor-pointer w-[35px] h-[35px]' src="/backbutton/back-button.webp" alt="" />    
       <span className='text-white text-[19px] font-semibold'>{screen}</span>    
       </div>
       <div className='grid  mt-6 bg-white/5 backdrop-blur-sm h-[56px] grid-cols-2 items-center justify-center ' style={{boxShadow:'0.2px -0.2px  white'}}>
      
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('withdraw');}}>
       
      <div   className='flex flex-col  relative h-full  items-center justify-center '>
      <span className='text-white p-2 text-[16px] font-semibold'>Withdraw</span> 
      {activeTab === 'withdraw' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>

       
            
        </div>

        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('addcash')}}>
       
       <div  className='flex flex-col  relative h-full  items-center justify-center '>
       <span className='text-white p-2 text-[16px] font-semibold'>Add Cash</span> 
       {activeTab == 'addcash' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
       </div>


        
             
         </div>
        
       </div>
       </div>
       <div className="flex justify-between px-10 border-b border-gray-600 ">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTabDays(tab)}
            className={`px-6 pb-2 cursor-pointer text-[14px] font-medium relative 
              ${activeTabDays === tab ? "text-red-500" : "text-gray-300"}`}
          >
            {tab}
            {activeTabDays === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 rounded-full"></span>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'withdraw' && <div className="mt-4 text-gray-400 text-[14px] text-center">
        There is no withdraw record during the current time period.
      </div>}
      {activeTab === 'addcash' && <div className="mt-4 text-gray-400 text-[14px] text-center">
        There is no recharge record during the current time period.
      </div>}
    </div>
  
  )
}

export default PaymentCollectionHistory