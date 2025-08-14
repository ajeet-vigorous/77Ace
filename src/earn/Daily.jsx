import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { MdCurrencyRupee } from 'react-icons/md'

const Daily = () => {
  return (
    <div className='w-full h-screen mt-2'>
        <div className='w-full rounded-[13px]  mt-10 bg-white/5 backdrop-blur-sm'>
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
        <div className='flex px-4  justify-between'>
            <div className='text-white text-[16px]'>Rate</div>
            <div className='text-white text-[16px]'>Rate</div>
        </div>

        <div className='flex px-10 mt-4 pb-4 items-center justify-between'>
            <div className='text-white bg-green-500 flex items-center justify-center  h-[24px] w-[24px] rounded-full text-[16px]'><IoCheckmarkOutline className='text-[20px]'/>
            </div>
            <hr className='w-full h-[1px] bg-white'/>
            <div className='text-white border-4 border-white h-[24px] w-[24px] rounded-full text-[16px]'></div>
        </div>
            
        </div>

        <div className='w-full px-2 mt-4 text-white text-[16px]'>
            Yesterday Report (Total)
        </div>
        <div className='w-full px-2 mt-1 text-slate-500 text-[13px]'>13-08-25</div>
        <div className='w-full  bg-[#4B130E] mt-5 rounded-md p-3 items-center justify-center'>
          <div className=' grid grid-cols-2 ' >
           <div className='flex w-full  items-center border-r-2 justify-between gap-2  border-white/20'>
            <div className='flex items-center gap-2'>
           <img src="/navigationtab/earn/level-daily.svg" className='w-[24px] h-[24px]' alt="" />
           <span className='text-white text-[16px]'>Level :</span>
           </div>
           <span className='text-white text-[23px] pr-2'>V0</span>
           </div>


           <div className='flex w-full  items-center justify-between gap-2  '>
            <div className='flex items-center gap-2 pl-2'>
           <img src="/navigationtab/earn/rate-daily.svg" className='w-[24px] h-[24px]' alt="" />
           <span className='text-white text-[16px]'>Rate :</span>
           </div>
           <span className='text-white text-[23px] pr-2'>0.0%</span>
           </div>
             </div>

        </div>


        <div className='w-full  bg-[#4B130E] mt-5 rounded-md p-3 items-center justify-center'>
          <div className=' grid grid-cols-2 ' >
           <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
            <div className='flex w-full items-start justify-start gap-2'>
           <img src="/navigationtab/earn/myself-daily.svg" className='w-[24px] h-[24px]' alt="" />
           <span className='text-white text-[14px]'>Myself betting amount:</span>
           </div>
           <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'><MdCurrencyRupee size={18}/> 0</div>          
           </div>


           <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
            <div className='flex w-full items-start justify-start gap-2 pl-2'>
           <img src="/navigationtab/earn/myself-daily2.svg" className='w-[24px] h-[24px]' alt="" />
           <span className='text-white text-[14px]'>Myself betting amount:</span>
           </div>
           <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'><MdCurrencyRupee size={18}/> 0</div>          
           </div>
             </div>

        </div>

        <div className='w-full  bg-[#4B130E] mt-5 rounded-md p-3 items-center justify-center'>
          <div className=' grid grid-cols-2 ' >
           <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
            <div className='flex w-full items-start justify-start gap-2'>
           <img src="/navigationtab/earn/team-daily.svg" className='w-[24px] h-[24px]' alt="" />
           <span className='text-white text-[14px]'>Team betting amount:</span>
           </div>
           <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'><MdCurrencyRupee size={18}/> 0</div>          
           </div>


           <div className='flex w-full flex-col gap-10 items-center border-r-2 justify-start   border-white/20'>
            <div className='flex w-full items-start justify-start gap-2 pl-2'>
           <img src="/navigationtab/earn/team-daily2.svg" className='w-[24px] h-[24px]' alt="" />
           <span className='text-white text-[14px]'>Team betting amount:</span>
           </div>
           <div className='text-white flex justify-end items-center w-full text-[22px] pr-2'><MdCurrencyRupee size={18}/> 0</div>          
           </div>
             </div>



        </div>

    
      <div className='w-full mb-5 bg-[#4B130E] mt-5 flex justify-between rounded-md p-3 items-center '>
            <div className='flex text-white items-center gap-2'>
                <img src="/navigationtab/earn/total-daliy.svg" alt="" className='w-[24px] h-[24px]'/>
                <span className='text-white whitespace-nowrap text-[14px]'>Total Rebate :</span>
            </div>
          
            <div className='text-white flex justify-end items-center w-full text-[22px] py-2'><MdCurrencyRupee size={18}/> 0</div>   

        </div>
    

      <div className='w-full px-2 mt-4 text-white text-[16px]'>
          Teams Details (Yesterday)
        </div>
        <div className='w-full px-2 mt-1 text-slate-500 text-[13px]'>13-08-25</div>
        <div className='w-full flex justify-center items-center text-slate-500 text-[16px]'>Add More members to your Team!</div>
    <div className='pb-44'>
       
    </div>
    </div>
  )
}

export default Daily