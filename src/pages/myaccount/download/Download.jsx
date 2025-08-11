import React from 'react'
import { FaAndroid } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const Download = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full '>        
        <div className="flex px-[30px] pt-[18px] rounded-[5px] items-center justify-start gap-36">
        <img
          onClick={() => navigate(-1)}
          className="cursor-pointer w-[35px] h-[35px]"
          src="/backbutton/back-button.webp"
          alt=""
        />
        <span className="text-white text-[19px] font-semibold">Download</span>
      </div>
      <div className='w-full p-4 px-5'>
      <div className='flex bg-[#0F0C0C] rounded-[14px] items-center px-5 py-6 mt-5 justify-between'>
        <img src="loginsignup/logo-3ban.webp" alt="" className='w-[80px] mb-2 h-[80px]' />
        <div className='text-white bg-gradient-to-t from-[#ec1809] to-[#c45f5f] px-4 py-0.5 rounded-full text-[17px] flex items-center gap-2 font-semibold'> <FaAndroid  size={22} />Download</div >
      </div>
      </div>
    </div>
  )
}

export default Download