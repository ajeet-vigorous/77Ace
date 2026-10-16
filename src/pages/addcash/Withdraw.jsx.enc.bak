import React, { useEffect, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAccountDetailsofClient, withDrawRequest } from '../../redux/reducers/user_reducer'
import { useSelector } from 'react-redux'
const Withdraw = ({paymentScreen}) => {
    const navigate = useNavigate();
    const [error,setError] = useState({
        amountError:'',
    });
    const clientBalance = JSON.parse(localStorage.getItem('clientBalance'));
    const {getAccountDetails} = useSelector((state) => state.user);
   const amountDetail=[{name:'Withdrawal Amount',amount:clientBalance}]
    const [amount,setAmount] = useState();
   const dispatch = useDispatch();
    const handleWithDrawRequest = () => {
        if(!amount){
           setError({amountError:'Please enter valid amount'})
            return
        }
        if(amount < 1){
            setError({amountError:'Please enter amount greater than 1'})
            return
        }
        if(Number(clientBalance).toFixed(2) < 1){
            setError({amountError:'You have  insufficient balance'})
            return
        }
        if(amount > Number(clientBalance).toFixed(2)){
            setError({amountError:'Please enter amount less than ' + Number(clientBalance).toFixed(2)})
            return
        }
        const data = {
            amount: amount,           
        }
        dispatch(withDrawRequest(data))
        
    }

    useEffect(() => {
        dispatch(getAccountDetailsofClient())
    },[])
    
    return (
    <div className="">{

        paymentScreen === 'withdraw' && 
        <div className=' text-[16px] text-[#8A8888]  my-6'>
            <div className='grid grid-cols-2 bg-[#251C1C] rounded-[7px] p-1 items-center justify-between'>
                <div className='flex flex-col gap-1 py-2 pl-10 border-r-[1px] border-[#494848]  items-center justify-center'>
                    <span className='text-[16px] font-semibold text-white'>{Number(clientBalance).toFixed(2)}</span>   
                    <span className='text-[16px] font-semibold text-[#8A8888]'>Cash Balance</span>
                </div>
                <div className='flex flex-col gap-1 py-2 pr-10   items-center justify-center'>
                    <span className='text-[16px] font-semibold text-white'>{Number(clientBalance).toFixed(2)}</span>
                    <span className='text-[16px] font-semibold text-[#8A8888]'>Withdrawable</span>
                </div>
            </div>

            <div className='my-4 ml-4'>
                <span className='text-[16px] font-semibold '>Choose Bank Account</span>
            </div>

            <div onClick={() => navigate('/addbank')} className='flex items-center border-[2px] gap-2 border-[#494848] rounded-[7px] p-2 justify-center'>
            <FiPlusCircle size={20} /> Add New Account
                
            </div>
            {getAccountDetails?.data && <>
                <div className='flex w-full text-white text-[13px] rounded-full py-0.5 px-3 mb-2 mt-2 bg-gradient-to-r from-[#B81212] to-[#140f0e] items-center justify-between'>
            <span>Bank Name</span>
          {getAccountDetails?.data?.bankName}
          </div>
          <div className='flex w-full text-white text-[13px] rounded-full py-0.5 px-3 mb-2 bg-gradient-to-r from-[#B81212] to-[#140f0e] items-center justify-between'>
          <span>Account Holder Name</span>
          {getAccountDetails?.data?.accountHolder}
          </div>
          <div className='flex w-full text-white text-[13px] rounded-full py-0.5 px-3 mb-2 bg-gradient-to-r from-[#B81212] to-[#140f0e] items-center justify-between'>
          <span>Account No</span>
          {getAccountDetails?.data?.accountNumber}
          </div>
          <div className='flex w-full text-white text-[13px] rounded-full py-0.5 px-3 bg-gradient-to-r from-[#B81212] to-[#140f0e] items-center justify-between'>
          <span>IFSC Code</span>
          {getAccountDetails?.data?.ifscCode}
          </div>
          </>
          }


            <div className='text-[13px] pt-7 pb-4 text-white'>Withdrawal Amount (0-{Number(clientBalance).toFixed(2)} Rs)</div>
            

           <div className='px-1'>
            <input  value={amount} onChange={(e) => {setAmount(e.target.value);setError({amountError:''})}} type="number" placeholder='Please enter your Withdrawal Amount' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
            </div>
               {
                error.amountError && (
                    <div className='text-red-500 text-[12px]'>
                        {error.amountError}
                    </div>
                )
               }
               <div className='flex flex-col w-full gap-2 items-center my-6 justify-center'>
               {
                    amountDetail.map((item,index)=>{
                        return(
                            <div key={index} className='flex w-full rounded-full py-0.5 px-3 bg-gradient-to-r from-[#B81212] to-[#140f0e] items-center justify-between'>
                                <span className='text-[15px] font-thin  text-white'>{item.name}</span>
                                <span className='text-[15px] font-semibold text-[#8A8888]'>Rs:{Number(item.amount).toFixed(2)}</span>
                            </div>
                        )
                    })
                }
               </div>
               <button  onClick={() => {handleWithDrawRequest()}} className={`w-full  mt-[16px]  ${amount ? 'bg-gradient-to-t from-[#B81212] to-[#f56e65]':'bg-[#8B8888]'} text-white text-[15px] font-semibold rounded-[3px] py-2`}>
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
    </div>
  )
}

export default Withdraw