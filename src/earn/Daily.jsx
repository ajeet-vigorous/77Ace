import React from 'react'

const Daily = () => {
  return (
    <div className='w-full h-screen mt-2'>
        <div className='w-full rounded-[13px]  bg-white/5 backdrop-blur-sm'>
        <div className='w-full   flex items-center justify-center'>
            <div className='w-full gap-2 p-4 pb-0 flex flex-col items-start justify-center'>
               <div className='text-white text-[16px]'> My Team</div>
               <img src="/navigationtab/earn/join-icon7.webp" className='w-[60px] h-[60px] object-cover' alt="" />
                
            </div>
            <div className='w-full px-4 flex flex-col items-end justify-center gap-2'>
                <div className='flex gap-2 justify-center items-center '>
                   <div className='h-4 w-4 bg-[#EC77FF]'></div>
                   <span className='text-white whitespace-nowrap text-[16px]'>members</span>
                   <div className='h-4 w-4 bg-[#FFA800]'></div>
                   <span className='text-white whitespace-nowrap text-[16px]'>Bet Amount</span>

                </div>
                <span className='text-white text-[34px] font-semibold'>0</span>
             

                
            </div>
        </div>
        <div className='text-white px-4 flex items-center justify-end text-[14px]'>Members</div>

        <div className='w-full px-2'>
            <div className='w-full rounded-full  px-4 flex items-center justify-between bg-white/20'>
        <span className='text-white text-[15px]'>0</span>
        <span className='text-white text-[15px]'>0/1</span>  
        <span className='text-white text-[15px]'>1</span>

        </div>
        </div>
        <div className='w-full px-2 mt-1'>
            <div className='w-full rounded-full  px-4 flex items-center justify-between bg-white/20'>
        <div className='text-white text-[15px]'>0</div>
        <div className='text-white text-[15px]'>0/2000</div>  
        <div className='text-white text-[15px]'>2000</div>

        </div>
        </div>

        <div className='flex px-4 mt-4 justify-between'>
            <div className='text-white text-[16px]'>0%</div>
            <div className='text-white text-[16px]'>0.3%</div>
        </div>
        <div className='flex px-4 mt-4 justify-between'>
            <div className='text-white text-[16px]'>Rate</div>
            <div className='text-white text-[16px]'>Rate</div>
        </div>

        <div className='flex px-4 mt-4 justify-between'>
            <div className='text-white bg-green-500 px-2 py-1 rounded text-[16px]'></div>
            <div className='text-white text-[16px]'>0.3%</div>
        </div>
            
        </div>
    </div>
  )
}

export default Daily