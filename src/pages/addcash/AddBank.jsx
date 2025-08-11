import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'


const AddBank = () => {
    const navigate = useNavigate();
    const [bankForm,setBankForm] = useState(false);

  return (
    <div className='w-full px-5 py-5   h-screen hide-scrollbar relative overflow-auto '>
     <div className='flex px-3 rounded-[5px] items-center justify-start gap-36'>
       <img onClick={() => navigate(-1)} className='cursor-pointer w-[35px] h-[35px]' src="/backbutton/back-button.webp" alt="" />    
       <span className='text-white text-[17px] font-semibold'>Bank Card</span>    
       </div>
       <div className='px-3'>
       <div onClick={() => setBankForm(true)} className='mt-16 rounded-3xl  flex flex-col gap-2 items-center justify-center h-[250px] bg-white/10 backdrop-blur-sm'>
        <div className='flex flex-col rounded-full gap-2 items-center bg-white/5 backdrop-blur-sm justify-center'>
        <FiPlus className='text-white' size={50}/>

            
        </div>
        <span className='text-white text-[17px] '>Add  Account</span>
        
       </div>
       </div>

       {bankForm && (
            <div onClick={() => setBankForm(false)} className="absolute inset-0 bg-[#0F0C0C] bg-opacity-70 px-5 flex items-center justify-center z-50">
            <div    onClick={(e) => e.stopPropagation()} className=' bg-[#0F0C0C] w-full px-5 pb-10 rounded-md'>
            <div className='flex justify-end'><RxCross2  onClick={(e) => {e.stopPropagation();setBankForm(false)}} className='cursor-pointer my-5 mx-4 text-white' size={20} /></div> 
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Holder Name</span>
                <input type="text" placeholder='Enter Holder Name' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                

            </div>
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Account Number</span>
                <input type="number" placeholder='Enter Account Number' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                

            </div>
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>IFSC Code</span>
                <input type="text" placeholder='Enter IFSC Code' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                


            </div>
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Phone Number</span>
                <input type="number" placeholder='Enter Phone Number' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                


            </div>
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Email</span>
                <input type="text" placeholder='Enter Email' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                


            </div>
            <button className='w-full h-[44px] rounded-[9px] bg-gradient-to-t from-[#B81212] to-[#f56e65]  px-3 text-[16px] text-white'>Confirm</button>
            

        </div>
  </div>
)}
       
    </div>
  )
}

export default AddBank