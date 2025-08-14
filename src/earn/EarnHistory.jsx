import React, { useState } from 'react'

const EarnHistory = () => {
    const [activeTab, setActiveTab] = useState("week");
  return (
    <div className='w-full h-screen '>
        <div className='w-full  mt-6 p-5 rounded-[10px] bg-white/5 backdrop-blur-sm grid-cols-4 items-center justify-center ' >
         <span className='text-white'>Total Rebates from 14-08-25</span>
         <div className='flex items-center pt-2 justify-between'>
            <img src="/navigationtab/earn/icon5.webp" className='w-[80px] h-[70px] ' alt="" />   
            <div className='flex flex-col items-end justify-end'>
                <span className='text-white text-[30px] font-semibold'> ₹ 0</span>
                <span className='text-white text-[15px]'>Total Rebates</span>
            </div>
         </div>

         
            
        </div>
        <div className="flex gap-4 mb-2 mt-5 ml-2">
        <button
          onClick={() => setActiveTab("week")}
          className={`pb-2.5 ${
            activeTab === "week"
              ? "border-b-2 border-red-500 text-[14px] text-white font-semibold"
              : "text-gray-400"
          }`}
        >
          Week
        </button>
        <button
          onClick={() => setActiveTab("month")}
          className={`pb-2.5 ${
            activeTab === "month"
              ? "border-b-2 border-red-500 text-[14px] text-white font-semibold"
              : "text-gray-400"
          }`}
        >
          Month
        </button>
      </div>
      <div className='text-gray-400 text-[16px] ml-2'>
      It hasn't been divided yet..Inviting more people to participate will earn you more!
        
      </div>
        
    </div>
  )
}

export default EarnHistory