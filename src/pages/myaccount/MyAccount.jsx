import React from 'react'
import { MdCurrencyRupee } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { domainName } from '../../config/Auth';

const MyAccount = () => {
    const navigate = useNavigate();
    const clientBalance = localStorage.getItem("clientBalance");
    const hanldeLogout = () => {
      localStorage.removeItem(`user_info_${domainName}`);
      localStorage.removeItem('token');
      localStorage.removeItem('clientBalance');
      localStorage.removeItem('betSlipData');
      localStorage.removeItem('clientbetChipsData');
      localStorage.removeItem('oneBetAmount');
      localStorage.removeItem('oneClickStatus');
      localStorage.removeItem('dashboardModalOpen');
     
      localStorage.removeItem('selectedTab');
      
      
      
      
    
      navigate('/');  
      
    }
  return (
    <div className="w-full px-5 py-6   h-screen hide-scrollbar  overflow-auto ">
        <div className=" w-[100%] flex  justify-center items-center relative">
        <div className="flex bg-[#DF4747] w-[95%]  h-[60px] rounded-[5px]">
            <div className="flex justify-between w-full items-start pt-3  h-[70px]    px-4 gap-2">              
                <span className="text-white text-[13px]">Total Score</span>
                <div className="text-white flex justify-center items-center text-[20px] font-semibold"> <MdCurrencyRupee size={25}/> {Number(clientBalance).toFixed(2)}</div>
            </div>      
        </div>
        <div className="grid grid-cols-3 gap-x-12 rounded-[5px] absolute -bottom-[55px] h-[70px] bg-white/5 backdrop-blur-sm justify-center w-full">
        <div onClick={() => navigate('/addcash', { state: { defaultTab: 'withdraw' } })} className="flex flex-col text-white justify-center  items-center">
                <img src="sidebar/myaccount/user-withdraw.webp" alt="" height={32} width={32}/>
                 <span className='text-[13px]'>Withdraw</span>
               </div>

               <div onClick={() => navigate('/addcash')} className="flex flex-col text-white justify-center  items-center">
                <img src="sidebar/myaccount/user-deposit.webp" alt="" height={32} width={32}/>
                 <span className='text-[13px]'>Deposit</span>
               </div>
               <div onClick={() => navigate('/promo')} className="flex flex-col text-white justify-center  items-center">
                <img src="sidebar/myaccount/user-promo.webp" alt="" height={32} width={32}/>
                 <span className='text-[13px]'>Promo</span>
               </div>
               
            </div>


       

        </div>

        <div className="w-full flex justify-start text-[17px] pt-16 mb-1 font-semibold text-white items-center">
            Other services
        </div>
        <div className='grid grid-cols-4  bg-[#2E3034] p-5 gap-12 rounded-[5px]'>
            <div onClick={()=>{navigate('/personalinfo')}} className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="sidebar/myaccount/Personal.svg" alt="" height={38} width={38}/>
            <span className='text-[13px] ml-4 whitespace-nowrap text-white'>Personal Center</span>
            </div>
            <div onClick={()=>{navigate('/history')}} className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="sidebar/myaccount/Recode.svg" alt="" height={38} width={38}/>
            <span className='text-[13px] whitespace-nowrap text-white'>Record</span>
            </div>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="sidebar/myaccount/Download.svg" alt="" height={38} width={38}/>
            <span className='text-[13px] whitespace-nowrap text-white'>Download </span>
            </div>
            <div onClick={()=>{navigate('/addbank')}} className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="sidebar/myaccount/Bank.svg" alt="" height={38} width={38}/>
            <span className='text-[13px] whitespace-nowrap text-white'>Bank</span>
            </div>
            <div onClick={()=>{navigate('/depositwithdrawal')}} className='flex flex-col gap-2 justify-center items-center cursor-pointer'>
            <img src="sidebar/myaccount/Order.svg" alt="" height={28} width={28}/>
            <span className='text-[13px] whitespace-nowrap text-white'>Order</span>
            </div>
            <div className='flex flex-col justify-center items-center cursor-pointer'>
            <img src="sidebar/myaccount/Message.svg" alt="" height={38} width={38}/>
            <span className='text-[13px] whitespace-nowrap text-white'>Message</span>
            </div>
            
        </div>

        <img className="w-full mt-5" src="sidebar/myaccount/advertise.webp" alt=""/>
        <div onClick={()=>hanldeLogout()} className="w-full flex justify-center items-center mt-5 rounded-[5px] p-3 bg-[#2E3034] cursor-pointer text-[18px] font-semibold text-[#AFAFB1]">
            LOG OUT

        </div>
        <div className='pb-44'></div>

    </div>
  )
}

export default MyAccount