import React, { useState } from 'react'
import { domainName } from '../config/Auth';
import { MdCurrencyRupee } from 'react-icons/md';

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

      const betAmountJson = [
       {
        level: "1",
        validRange: "1",
        awardAmount: "200",
       },
       {
        level: "2",
        validRange: "2-50",
        awardAmount: "250",
       },
       {
        level: "3",
        validRange: "51-150",
        awardAmount: "300",
       },
       {
        level: "4",
        validRange: "151-1000",
        awardAmount: "350",
       },
       {
        level: "5",
        validRange: "1001-5000",
        awardAmount: "400",
       },
       {
        level: "6",
        validRange: "5001-15000",
        awardAmount: "450",
       },
       {
        level: "7",
        validRange: "15001-50000",
        awardAmount: "550",
       },
       {
        level: "8",
        validRange: "50001-100000",
        awardAmount: "700",
       },
       {
        level: "9",
        validRange: "100001-150000",
        awardAmount: "850",
       },
       {
        level: "10",
        validRange: "150001+",
        awardAmount: "1000",
       },
 
      
      ];

      const CopyToClipboard = () => {
        navigator.clipboard.writeText(domainName + `/signup/${user?.data?.referralCode}`);
        handleCopyUrl()
      };
  return (
    <div className='w-full  h-full   '>
        <img className='w-full h-full mt-5' src="/dashboard/newEarn-banner2.webp" alt="" />
        <div className='w-full h-full bg-[#4B130E] mt-5 rounded-md p-5 items-center justify-center'>
            <div className='text-white text-[16px] flex font-semibold'>
                invite new users to register using exclusive referral link or QR code and receive three general rewards :
            </div>
            <div className='text-white text-[16px] gap-2  mt-4 flex justify-start items-center font-semibold'>
               <img  className='w-[24px] h-[24px] ' src="/dashboard/earn/newEarn-icon9.webp"  alt="" />
               <div onClick={() => {CopyToClipboard()}} className='flex items-center px-4 w-full overflow-auto  bg-[#261C1C] flex-1'>
                <div className='p-1 w-full overflow-hidden  flex-1'>{domainName}/{user?.data?.referralCode}</div>
                <img  className='w-[15px] h-[15px] ' src="/dashboard/earn/newEarn-icon1.webp"  alt="" />
               </div>
            </div>

        </div>

         <div className='w-full  bg-[#4B130E] mt-5 rounded-md p-3 items-center justify-center'>
                  <div className=' grid grid-cols-2 my-0.5' >
                   <div className='flex w-full  items-center border-r-2 justify-between gap-2  border-white/20'>
                    <div className='flex items-center gap-2'>
                   <img src="/navigationtab/earn/newEarn-icon2.webp" className='w-[24px] h-[24px]' alt="" />
                   <span className='text-white text-[14px]'>invited :</span>
                   </div>
                   <span className='text-white text-[20px] pr-2'>0</span>
                   </div>
        
        
                   <div className='flex w-full  items-center justify-between gap-2  '>
                    <div className='flex items-center gap-2 pl-2'>
                   <img src="/navigationtab/earn/newEarn-icon3.webp" className='w-[24px] h-[24px]' alt="" />
                   <span className='text-white text-[16px]'>valid invites :</span>
                   </div>
                   <span className='text-white text-[20px] pr-2'>0</span>
                   </div>
                     </div>
        
                </div>
        
        
                <div className='w-full  bg-[#4B130E] mt-5 rounded-md p-3 items-center justify-center'>
                  <div className=' grid grid-cols-2 ' >
                   <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
                    <div className='flex w-full items-start justify-start gap-2'>
                   <img src="/navigationtab/earn/newEarn-icon4.webp" className='w-[24px] h-[24px]' alt="" />
                   <span className='text-white text-[14px]'>Valid invitations today:</span>
                   </div>
                   <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'> 0</div>          
                   </div>
        
        
                   <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
                    <div className='flex w-full items-start justify-start gap-2 pl-2'>
                   <img src="/navigationtab/earn/newEarn-icon5.webp" className='w-[24px] h-[24px]' alt="" />
                   <span className='text-white text-[14px]'>total Bonus:</span>
                   </div>
                   <div className='text-white flex justify-end items-center w-full text-[22px] pr-2' > <MdCurrencyRupee size={18}/>0</div>          
                   </div>
                     </div>
        
                </div>
        
                <div className='w-full  bg-[#4B130E] mt-5 rounded-md p-3 items-center justify-center'>
                  <div className=' grid grid-cols-2 ' >
                   <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
                    <div className='flex w-full items-start justify-start gap-2'>
                   <img src="/navigationtab/earn/newEarn-icon6.webp" className='w-[24px] h-[24px]' alt="" />
                   <span className='text-white text-[14px]'>current level:</span>
                   </div>
                   <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'>V0</div>          
                   </div>
        
        
                   <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
                    <div className='flex w-full items-start justify-start gap-2 pl-2'>
                   <img src="/navigationtab/earn/newEarn-icon7.webp" className='w-[24px] h-[24px]' alt="" />
                   <span className='text-white text-[14px]'>current bonus level:</span>
                   </div>
                   <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'><MdCurrencyRupee size={18}/> 0</div>          
                   </div>
                     </div>
        
        
        
                </div>
        
            
              <div className='w-full mb-5 bg-[#4B130E] mt-5 flex justify-between rounded-md p-3 items-center '>
                    <div className='flex text-white items-center gap-2'>
                        <img src="/navigationtab/earn/newEarn-icon8.webp" alt="" className='w-[24px] h-[24px]'/>
                        <span className='text-white whitespace-nowrap text-[14px]'>Bonus Claimed :</span>
                    </div>
                  
                    <div className='text-white flex justify-end items-center w-full text-[22px] py-2'><MdCurrencyRupee size={18}/> 0</div>   
        
                </div>

                <div
        className="text-white font-bold text-center py-1 mt-3 shadow-inner "
        style={{
          background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
        }}
      >
        <div
          className="text-white  text-[24px] font-bold text-center py-2 text-base border-b-2 border-t-2 border-[#2a0f0f] shadow-inner"
          style={{
            background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
          }}
        >
          Fixed Invitation Bonus
        </div>

      </div>

      <div className="rounded-t-2xl mt-4  w-full overflow-hidden">
        <table className="w-full table-auto border-1px rounded-t-[10px]">
          <thead>
            <tr className="text-white bg-gradient-to-t  rounded-t-[10px] from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
              <th className="w-10 py-2">Level</th>
              <th className="w-10 py-2">Valid Invite Range</th>
              <th className="w-10 py-2">Reaward per User (RS)</th>
             
            </tr>
          </thead>
          <tbody>
            {betAmountJson
              .slice()
              .reverse()
              .map((item,index) => (
                <tr
                  key={item.id}
                  className={`text-center text-white text-[14px]  font-semibold ${
                    index % 2 === 0 ? "bg-[#250F0F]" : "bg-[#231313]"
                  }`}
                >
                  <td className="py-1">{item.level}</td>
                  <td className="py-1">
                    <div className="flex justify-center items-center gap-1">
                      {item.validRange}
                    </div>
                  </td>
                  <td className="py-1">{item.awardAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="text-[#9B9999] text-[16px] mt-2"> . Note: Fixed rewards are issued only after the invited users meet the rating criteria.</div>


      <div
        className="text-white font-bold text-center py-1 mt-3 shadow-inner "
        style={{
          background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
        }}
      >
        <div
          className="text-white  text-[24px] font-bold text-center py-2 text-base border-b-2 border-t-2 border-[#2a0f0f] shadow-inner"
          style={{
            background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
          }}
        >
         Remark
        </div>
        

      </div>
      <div className="text-[#9B9999] text-[16px] mt-2"> .System evaluates each invited user based on their betting activity. Encourage your friends to place real bets and stay active - usually, total bets over 2000Rs have a higher chance of qualifying. Rewards will be issued automatically upon meeting the criteria.</div>
      <div className="text-[#9B9999] text-[16px] mt-2">.In cases of malicious behavior such as fake accounts or reward farming, related rewards will be canceled and not issued.</div>
      <div className="text-[#9B9999] text-[16px] mt-2">.77ACE reserves all rights of final interpretation.</div>
            <div className="pb-44"></div>

       
    </div>
  )
}

export default EarnScreen