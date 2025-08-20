import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAccountDetailsofClient, saveAccountDetails } from '../../redux/reducers/user_reducer';
const AddBank = () => {
    const navigate = useNavigate();
    const [showCardEdit,setShowCardEdit] = useState(false);
    const [accountForm,setAccountForm] = useState(false);
    const [bankForm,setBankForm] = useState(false);
    const dispatch = useDispatch();
    const [error,setError] = useState({
        bankName:'',
        accountHolder:'',
        accountNumber:'',
        ifscCode:'',
        phoneNumber:'',
        email:''
    });
    const {getAccountDetails} = useSelector((state) => state.user);
    const [bankDetails,setBankDetails] = useState({
        bankName:'',
        accountHolder:'',
        accountNumber:'',
        ifscCode:'',
        phoneNumber:'',
        email:''
    });

    const getBankDetails = () => {
        dispatch(getAccountDetailsofClient()).then((res)=>{
            setBankDetails(res.payload.data);
            
        })
    }

    useEffect(() => {
        getBankDetails();
    },[])


   
    const updateBankDetails = () => {
        if(!bankDetails.bankName){
            setError({...error,bankName:'Please enter bank name'})
            return
        }
        if(!bankDetails.accountHolder){
            setError({...error,accountHolder:'Please enter account holder name'})
            return
        }
        if(!bankDetails.accountNumber){
            setError({...error,accountNumber:'Please enter account number'})
            return
        }
        if(!bankDetails.ifscCode){
            setError({...error,ifscCode:'Please enter ifsc code'})
            return
        }
     
        dispatch(saveAccountDetails(bankDetails)).then((res)=>{
            
        dispatch(getAccountDetailsofClient()).then((res)=>{
                setBankDetails(res.payload.data);
                setBankForm(false);
                setAccountForm(false);
               
            })  
        })
    }

   
  return (
    <div className='w-full px-5 py-5   h-screen hide-scrollbar relative overflow-auto '>
     <div className='flex px-3 rounded-[5px] items-center justify-start gap-36'>
       <img onClick={() => navigate(-1)} className='cursor-pointer w-[35px] h-[35px]' src="/backbutton/back-button.webp" alt="" />    
       <span className='text-white text-[17px] font-semibold'>Bank Card</span>    
       </div>
       <div className='px-3'>
       {!getAccountDetails?.data && <div onClick={() => {setBankForm(true);getBankDetails()}} className='mt-16 rounded-3xl  flex flex-col gap-2 items-center justify-center h-[250px] bg-white/10 backdrop-blur-sm'>
        <div className='flex flex-col rounded-full gap-2 items-center bg-white/5 backdrop-blur-sm justify-center'>
        <FiPlus className='text-white' size={50}/>

            
        </div>
        <span className='text-white text-[17px] '>{getAccountDetails ? 'Update' :'Add' }  Account</span>
        </div>}

        {getAccountDetails?.data &&
         <div onClick={() => setShowCardEdit((prev) => !prev)}  className='w-full bg-red-600    relative mt-14 rounded-3xl bg-cover bg-center'>
            <img src="/paymentimg/card-1.webp" alt="" />
            {showCardEdit && <div className='flex sm:px-10 px-5 absolute top-0 w-full pt-3 justify-between items-center'>
                <img onClick={() => setBankForm(true)} className='cursor-pointer sm:h-7 sm:w-7 h-6 w-6' src="paymentimg/edit-icon.svg" alt="" />   
                <img onClick={() => setAccountForm(true)} className='cursor-pointer sm:h-7 sm:w-7 h-6 w-6' src="paymentimg/delete-icon.svg" alt="" />   

            </div>}
            <div>
                <div className={`text-white sm:left-10 left-7 absolute ${showCardEdit ?'top-10':'top-7'} text-[18px] font-semibold`}>{bankDetails?.accountHolder}</div>
             
            </div>
            <div>
                <div className={`text-white absolute bottom-10   sm:bottom-16 md:bottom-7 sm:left-10 left-7 text-[18px] font-semibold`}> ****{bankDetails?.accountNumber.slice(-4)}</div>
             
            </div>

         

         </div>
        }
       </div>

       {bankForm && (
            <div onClick={() => setBankForm(false)} className="absolute inset-0 bg-[#0F0C0C] bg-opacity-70 px-5 flex items-center justify-center z-50">
            <div    onClick={(e) => e.stopPropagation()} className=' bg-[#0F0C0C] w-full px-5 pb-10 rounded-md'>
            <div className='flex justify-end'><RxCross2  onClick={(e) => {e.stopPropagation();setBankForm(false)}} className='cursor-pointer my-5 mx-4 text-white' size={20} /></div> 
            
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Bank Name</span>
                <input value={bankDetails?.bankName} onChange={(e) => {setBankDetails({...bankDetails,bankName:e.target.value});setError({...error,bankName:''})}} type="text" placeholder='Enter Bank Name' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                
            </div>
            {error.bankName && <span className='text-red-500'>{error.bankName}</span>}
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Holder Name</span>
                <input value={bankDetails?.accountHolder} onChange={(e) => {setBankDetails({...bankDetails,accountHolder:e.target.value});setError({...error,accountHolder:''})}} type="text" placeholder='Enter Holder Name' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                

            </div>
            {error.accountHolder && <span className='text-red-500'>{error.accountHolder}</span>}
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Account Number</span>
                <input value={bankDetails?.accountNumber} onChange={(e) => {setBankDetails({...bankDetails,accountNumber:e.target.value});setError({...error,accountNumber:''})}} type="number" placeholder='Enter Account Number' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                

            </div>
            {error.accountNumber && <span className='text-red-500'>{error.accountNumber}</span>}
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>IFSC Code</span>
                <input value={bankDetails?.ifscCode} onChange={(e) => {setBankDetails({...bankDetails,ifscCode:e.target.value});setError({...error,ifscCode:''})}} type="text" placeholder='Enter IFSC Code' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                


            </div>
            {error.ifscCode && <span className='text-red-500'>{error.ifscCode}</span>}
            {/* <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Phone Number</span>
                <input value={bankDetails.phoneNumber} onChange={(e) => setBankDetails({...bankDetails,phoneNumber:e.target.value})} type="number" placeholder='Enter Phone Number' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                


            </div>
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Email</span>
                <input value={bankDetails.email} onChange={(e) => setBankDetails({...bankDetails,email:e.target.value})} type="text" placeholder='Enter Email' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                


            </div> */}
            <button onClick={() => updateBankDetails()} className='w-full h-[44px] rounded-[9px] bg-gradient-to-t from-[#B81212] to-[#f56e65]  px-3 text-[16px] text-white'>Confirm</button>
            

        </div>
  </div>
)}



{accountForm && (
            <div onClick={() => setAccountForm(false)} className="absolute inset-0 bg-[#0F0C0C] bg-opacity-70 px-5 flex items-center justify-center z-50">
            <div    onClick={(e) => e.stopPropagation()} className=' bg-[#0F0C0C] w-full px-5 pb-10 rounded-md'>
            <div className='flex justify-end'><RxCross2  onClick={(e) => {e.stopPropagation();setAccountForm(false)}} className='cursor-pointer my-5 mx-4 text-white' size={20} /></div> 
            
           
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <span className='text-white text-[17px] font-semibold'>Account Number</span>
                <input value={bankDetails?.accountNumber} onChange={(e) => {setBankDetails({...bankDetails,accountNumber:e.target.value});setError({...error,accountNumber:''})}} type="number" placeholder='Enter Account Number' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                

            </div>
            {error.accountNumber && <span className='text-red-500'>{error.accountNumber}</span>}

            <button onClick={() => updateBankDetails()} className='w-full h-[44px] rounded-[9px] bg-gradient-to-t from-[#B81212] to-[#f56e65]  px-3 text-[16px] text-white'>Confirm</button>
            

        </div>
  </div>
)}
       
    </div>
  )
}

export default AddBank