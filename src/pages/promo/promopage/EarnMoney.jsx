import React from 'react'
import { CiStopwatch } from 'react-icons/ci'
import { FaInfinity } from 'react-icons/fa'

const EarnMoney = () => {
  return (
    <div className='w-full h-screen'>
    <div className='w-full h-screen  px-5 relative  hide-scrollbar'>
      <img className="w-full mt-1.5 " src="/slider/1722931246banner-5.webp" alt="" />
      <div className='text-[14px] p-1 px-4 mt-4 text-white'>Earn Money</div>
      <div className='text-[16px] p-1 px-4 text-[#FEF05E] font-semibold'   >Everyone can earn money!</div>
      <div className='text-[20px] w-full text-white text-center mt-3 font-semibold'>Earn Money</div>
      <div className='text-[16px] px-4 w-full text-white mt-2 mb-3 font-semibold'>Cashback up to <span className='text-[#FFA500]'>1.5%  </span>of bet amount</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>-We advocate benefits and bonuses for everyone.</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>-Active Members:Daily bet amount reaches 100 <span className='text-[#FFA500]'> 100</span></div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>Your cashback will be calculated based on the total bet amount of your active members. Cashback can be withdrawn or used for further betting.</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>Earn lifetime revenue with your referred players.</div>
      <div className='text-[16px] px-4 w-full text-white  font-semibold'>-Refer as many friends as possible to get a higher percentage discount.</div>
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

export default EarnMoney