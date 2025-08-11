import React from 'react'
import { CiStopwatch } from 'react-icons/ci'
import { FaInfinity } from 'react-icons/fa'

const RechargeExtra = () => {
  return (
    <div className='w-full h-screen'>
    <div className='w-full h-screen  px-5 relative  hide-scrollbar'>
      <img className="w-full mt-1.5 " src="/Promo/17237286103.webp" alt="" />
     
      <div className='text-[24px] p-1 mt-6 px-4 text-[#FEF05E] font-semibold'   >Recharge Extra 5%</div>
      <div className='text-[16px] px-4 w-full text-white font-semibold'>get an additional 5% bouns for per recharge,</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>only need 10 times the wager.</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>Let's get started~</div>
      </div>
      <div className='absolute bottom-16 w-full pt-3  bg-black  '>
        <div className='flex justify-between  px-6 w-full items-center '>
            <span className='text-[#808080]'>Promotion Ends</span>
            <div className='text-white flex '><CiStopwatch /> <FaInfinity /></div>
        </div>
       
       <div className='px-5'>
       <button className='w-full mt-6 mb-10 bg-gradient-to-t from-[#B81212] to-[#f56e65] text-white text-[16px] font-semibold rounded-[5px] py-2'>
               JOIN NOW
        </button>
       </div>

      </div>
      
        
    </div>
  )
}

export default RechargeExtra