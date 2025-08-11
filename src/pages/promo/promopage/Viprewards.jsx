import React from 'react'
import { CiStopwatch } from 'react-icons/ci'
import { FaInfinity } from 'react-icons/fa'

const Viprewards = () => {
  return (
    <div className='w-full h-screen'>
    <div className='w-full h-screen  px-5 relative  hide-scrollbar'>
      <img className="w-full mt-1.5 " src="/slider/1722931231banner-3.webp" alt="" />
      <div className='text-[14px] p-1 px-4 mt-4 text-white'>VIP rewards</div>
      <div className='text-[16px] p-1 px-4 text-[#FEF05E] font-semibold'   >Get Unlimited Rewards!</div>
      <div className='text-[20px] w-full text-white text-center mt-3 font-semibold'>Generous VIP rewards!</div>
      <div className='text-[16px] px-4 w-full text-white mt-2 mb-3 font-semibold'>Become our VIP, get great prizes and generous rewards!</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>VIP level up rewards from <span className='text-[#FFA500]'>20 Rs  </span> to<span className='text-[#FFA500]'> 30000 Rs!</span></div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>Monthly VIP rewards from <span className='text-[#FFA500]'>38 Rs </span>  to  <span className='text-[#FFA500]'> 88888 Rs!</span></div>
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

export default Viprewards