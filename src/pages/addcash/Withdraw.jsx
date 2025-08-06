import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Withdraw = ({paymentScreen}) => {
    const navigate = useNavigate();
   const amountDetail=[{name:'Withdrawal Amount',amount:0},{name:'VIPO Daily limit',amount:2500},{name:'Remain Wagers',amount:0}]
    return (
    <>{

        paymentScreen === 'withdraw' && 
        <div className=' text-[16px] text-[#8A8888]  my-6'>
            <div className='grid grid-cols-2 bg-[#251C1C] rounded-[7px] p-1 items-center justify-between'>
                <div className='flex flex-col gap-1 py-2 pl-10 border-r-[1px] border-[#494848]  items-center justify-center'>
                    <span className='text-[16px] font-semibold text-white'>0</span>   
                    <span className='text-[16px] font-semibold text-[#8A8888]'>Cash Balance</span>
                </div>
                <div className='flex flex-col gap-1 py-2 pr-10   items-center justify-center'>
                    <span className='text-[16px] font-semibold text-white'>0</span>
                    <span className='text-[16px] font-semibold text-[#8A8888]'>Withdrawable</span>
                </div>
            </div>

            <div className='my-4 ml-4'>
                <span className='text-[16px] font-semibold '>Choose Bank Account</span>
            </div>

            <div onClick={() => navigate('/addbank')} className='flex items-center border-[2px] gap-2 border-[#494848] rounded-[7px] p-2 justify-center'>
            <FiPlusCircle size={20} /> Add New Account
                
            </div>

            <div className='text-[13px] pt-7 pb-4 text-white'>Withdrawal Amount (200-20,000 Rs)</div>

            <input type="text" placeholder='Please enter your Withdrawal Amount' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
               <div className='flex flex-col w-full gap-2 items-center my-6 justify-center'>
               {
                    amountDetail.map((item,index)=>{
                        return(
                            <div key={index} className='flex w-full rounded-full py-0.5 px-3 bg-gradient-to-r from-[#B81212] to-[#140f0e] items-center justify-between'>
                                <span className='text-[15px] font-thin  text-white'>{item.name}</span>
                                <span className='text-[15px] font-semibold text-[#8A8888]'>Rs:{item.amount}</span>
                            </div>
                        )
                    })
                }
               </div>
               <button className='w-full  mt-[16px] bg-[#8B8888] text-white text-[15px] font-semibold rounded-[3px] py-2'>
                SUBMIT
              </button>

             <div className='flex flex-col m-4 items-start justify-start'>
             <span className='text-[12px] text-[#8A8888]'>Note</span>
             <ul className='list-disc px-3.5'>
                <li className='text-[12px] font-semibold'>
                    <span className='text-[#7C6B14]'>3% +6rs</span>
                    <span> of Withdrawable amount will be deducted as </span>
                    <span className='text-[#7C6B14]'>bank commission</span>
                </li>
                <li className='text-[12px] font-semibold'>
                  please double check the withdrawal information before , if withdrawal failed or you have any other questions, please contact CS 24/7
                </li>
             </ul>

             </div>

      </div>
      }
    </>
  )
}

export default Withdraw