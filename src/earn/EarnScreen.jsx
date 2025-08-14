import React, { useState } from 'react'
import { domainName } from '../config/Auth';

const EarnScreen = ({setCopyUrl, copyUrl}) => {
    const location = window.location.host;
    const user = JSON.parse(
        localStorage.getItem(`user_info_${domainName}`)
      );
      const copyToClipBoard = () => {
        navigator.clipboard.writeText(location + "/" + user?.data?.referralCode);
        handleCopyUrl()
      };

      const handleCopyUrl = () => {
        setCopyUrl(true);
        setTimeout(() => {
          setCopyUrl(false);
        }, 2000);
      };
  return (
    <div className='w-full  h-full'>
        <img className='w-full h-full mt-5' src="/dashboard/newEarn-banner2.webp" alt="" />
        <div className='w-full h-full bg-[#4B130E] mt-5 rounded-md p-5 items-center justify-center'>
            <div className='text-white text-[16px] flex font-semibold'>
                invite new users to register using exclusive referral link or QR code and receive three general rewards :
            </div>
            <div className='text-white text-[16px] gap-2  mt-4 flex justify-start items-center font-semibold'>
               <img  className='w-[24px] h-[24px] ' src="/dashboard/earn/newEarn-icon9.webp"  alt="" />
               <div onClick={() => {copyToClipBoard()}} className='flex items-center px-4 w-full overflow-auto  bg-[#261C1C] flex-1'>
                <div className='p-1 w-full overflow-hidden  flex-1'>{location}/{user?.data?.referralCode}</div>
                <img  className='w-[15px] h-[15px] ' src="/dashboard/earn/newEarn-icon1.webp"  alt="" />
               </div>
            </div>

        </div>

       
    </div>
  )
}

export default EarnScreen