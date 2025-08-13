import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { domainName } from '../../../config/Auth';
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../../redux/reducers/auth.reducer';
import { userUpdate } from '../../../redux/reducers/user_reducer';
import { message } from 'antd';
const PersonalInfo = () => {
    const navigate = useNavigate();
    const [edit,setEdit] = useState('');
    const [password,setPassword] = useState('');
    const [passwordError,setPasswordError] = useState({
        oldPasswordError : '',
        newPasswordError : '',
        confirmPasswordError : ''
    });
    const [nickNameError,setNickNameError] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [fullName,setFullName] = useState('');
    const [nickName,setNickName] = useState('');
    const userDetails = JSON.parse(localStorage.getItem(`user_info_${domainName}`));

    const dispatch = useDispatch();
    const upadatePassword = () => {
        if(!password){
            setPasswordError({
                oldPasswordError : 'Old Password is required',
                newPasswordError : '',
                confirmPasswordError : ''
            })
            return;
        }
        if(!newPassword){
            setPasswordError({
                oldPasswordError : '',
                newPasswordError : 'New Password is required',
                confirmPasswordError : ''
            })
            return;
        }
        if(!confirmPassword){
            setPasswordError({
                oldPasswordError : '',
                newPasswordError : '',
                confirmPasswordError : 'Confirm Password is required'
            })
            return;
        }
        
        const userData = {
            oldPassword :password,
            password :newPassword,
            confirmPassword :confirmPassword
        }
    dispatch(updatePassword(userData)).then(() => {
        message.success('Password updated successfully');
        setEdit('');
        setPassword('');
        setNewPassword('');
        setConfirmPassword('');
        localStorage.removeItem(`user_info_${domainName}`);
        localStorage.removeItem('token');
        localStorage.removeItem('clientBalance');
        localStorage.removeItem('betSlipData');
        localStorage.removeItem('clientbetChipsData');
        localStorage.removeItem('oneBetAmount');
        localStorage.removeItem('oneClickStatus');
        localStorage.removeItem('dashboardModalOpen');  
        localStorage.removeItem('clientdomainSetting');             
        navigate('/'); 
    })
}
    
    const handleUpdate = () => {
        if(!nickName){
            setNickNameError('Nick Name is required');  
            return;      
        }

    
        const userData = {
            ...userDetails?.data,
            name : nickName           
          }
          dispatch(userUpdate(userData)).then(() => {
              setEdit('');
              setNickName('');             
          }).then(() => {
             localStorage.removeItem(`user_info_${domainName}`);
                 localStorage.removeItem('token');
                 localStorage.removeItem('clientBalance');
                 localStorage.removeItem('betSlipData');
                 localStorage.removeItem('clientbetChipsData');
                 localStorage.removeItem('oneBetAmount');
                 localStorage.removeItem('oneClickStatus');
                 localStorage.removeItem('dashboardModalOpen');               
                 navigate('/'); 
          })
      

       

        
        
    }

  return (
    <div className='w-full px-5 py-2   h-screen hide-scrollbar relative overflow-auto '>
        <div className='flex p-3  rounded-[5px] items-center justify-start gap-36'>
    <img onClick={() => navigate(-1)} className='cursor-pointer w-[35px] h-[35px]' src="/backbutton/back-button.webp" alt="" />    
    <span className='text-white text-[17px] font-semibold'>personal center</span>   
    </div>

    <div className='flex justify-between items-center pt-3'>
     <span className='text-[#AFAFB1] text-[16px] font-semibold'>Avatar</span>

    <img className='w-[75px] h-[75px] rounded-full' src="header/1-1.webp" alt="" />
    </div>

    <div onClick={() => setEdit('nickName')} className='flex justify-start items-start pt-3 flex-col'>
        <span className='text-[#AFAFB1] text-[16px] '>Nick Name</span>
        <div className='text-white bg-[#261C1C] p-2 mt-1 w-full  rounded-[5px]   text-[16px] '>{userDetails?.data?.name}</div>
    </div>
    {/* <div  onClick={() => setEdit('email')} className='flex justify-start items-start pt-3 flex-col'>
        <span className='text-[#AFAFB1] text-[16px] '>Email</span>
        <div className='text-white bg-[#261C1C]  p-2 mt-1  w-full rounded-[5px]    text-[16px] '>{userDetails?.data?.email}</div>
    </div> */}
    <div onClick={() => setEdit('password')}  className='flex justify-start items-start pt-3 flex-col'>
        <span className='text-[#AFAFB1] text-[16px] '>Password</span>
        <div className='text-white bg-[#261C1C] p-2 mt-1 w-full  rounded-[5px]   text-[16px] '>********</div>
    </div>
    <div onClick={() => setEdit('fullName')}  className='flex justify-start items-start pt-3 flex-col'>
        <span className='text-[#AFAFB1] text-[16px] '>Full Name</span>
        <div className='text-white bg-[#261C1C] p-2 mt-1 w-full  rounded-[5px]   text-[16px] '>{userDetails?.data?.username}</div>
    </div>


       {edit =='nickName' &&        <div onClick={() => {setEdit('');setNickName('');setNickNameError('')}} className="absolute inset-0 bg-black bg-opacity-70 p-10 px-[70px] flex items-center justify-center z-50">
                <div    onClick={(e) => e.stopPropagation()} className=' bg-[#110b0b] w-full p-5'>
                <div className='flex justify-between text-white'><div className='flex flex-1 font-semibold text-[18px] items-center justify-center gap-2'>Edit NickName</div> <RxCross2 onClick={(e) => {e.stopPropagation();setEdit('')}} className='cursor-pointer text-white' size={20} /></div> 
                <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                    <span className='text-white text-[15px] font-semibold pt-2'>Nick Name</span>
                    <input value={nickName} onChange={(e) => {setNickName(e.target.value);setNickNameError('')}} type="text" placeholder='Enter Nick Name' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                    <div className='text-red-500'>{nickNameError}</div> 
    
                </div>
                
                
                <button onClick={() => handleUpdate()} className='w-full h-[44px] rounded-[9px] bg-gradient-to-t from-[#B81212] to-[#f56e65]  px-3 text-[16px] text-white'>Confirm</button>
                
    
            </div>
            
      </div>}

      
      {/* {edit=='email' &&        <div onClick={() => setEdit('')} className="absolute inset-0 bg-black bg-opacity-70 p-10 px-[70px] flex items-center justify-center z-50">
                <div    onClick={(e) => e.stopPropagation()} className=' bg-[#110b0b] w-full p-5'>
                <div className='flex justify-between text-white'><div className='flex flex-1 font-semibold text-[18px] items-center justify-center gap-2'>Edit Email</div> <RxCross2 onClick={(e) => {e.stopPropagation();setEdit('')}} className='cursor-pointer text-white' size={20} /></div> 
                <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                    <span className='text-white text-[15px] font-semibold pt-2'>Edit Email</span>
                    <input type="text" placeholder='Enter Email' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                    
    
                </div>
                
                
                <button className='w-full h-[44px] rounded-[9px] bg-gradient-to-t from-[#B81212] to-[#f56e65]  px-3 text-[16px] text-white'>Confirm</button>
                
    
            </div>
      </div>} */}

      
      {edit=='password' &&        <div onClick={() => {setEdit('');setPassword('');setNewPassword('');setConfirmPassword('');setPasswordError({oldPasswordError : '',newPasswordError : '',confirmPasswordError : ''})}} className="absolute inset-0 bg-black bg-opacity-70 p-10 px-[70px] flex items-center justify-center z-50">
                <div    onClick={(e) => e.stopPropagation()} className=' bg-[#110b0b] w-full p-5'>
                <div className='flex justify-between text-white'><div className='flex flex-1 font-semibold text-[18px] items-center justify-center gap-2'>Edit Password</div> <RxCross2 onClick={(e) => {e.stopPropagation();setEdit('')}} className='cursor-pointer text-white' size={20} /></div> 
                <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                    <span className='text-white text-[15px] font-semibold pt-2'>Edit password</span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter current password' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                    <div className='text-red-500'>{passwordError.oldPasswordError}</div>
                    <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="text" placeholder='Enter new password' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                    <div className='text-red-500'>{passwordError.newPasswordError}</div>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="text" placeholder='Enter confirm password' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                    <div className='text-red-500'>{passwordError.confirmPasswordError}</div>
                </div>
                
                
                <button onClick={() => upadatePassword()} className='w-full h-[44px] rounded-[9px] bg-gradient-to-t from-[#B81212] to-[#f56e65]  px-3 text-[16px] text-white'>Confirm</button>
                
    
            </div>
      </div>}

      {edit=='fullName' &&        <div onClick={() => {setEdit('');setFullName('')}} className="absolute inset-0 bg-black bg-opacity-70 p-10 px-[70px] flex items-center justify-center z-50">
                <div    onClick={(e) => e.stopPropagation()} className=' bg-[#110b0b] w-full p-5'>
                <div className='flex justify-between text-white'><div className='flex flex-1 font-semibold text-[18px] items-center justify-center gap-2'>Edit Full Name</div> <RxCross2 onClick={(e) => {e.stopPropagation();setEdit('')}} className='cursor-pointer text-white' size={20} /></div> 
                <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                    <span className='text-white text-[15px] font-semibold pt-2'>Full Name</span>
                    <input disabled value={userDetails?.data?.username}  type="text" placeholder='Enter Full Name' className='w-full h-[44px] rounded-[9px] bg-[#261C1C]  px-3 text-[16px] text-white' />
                    
    
                </div>
                
                
            
                
    
            </div>
      </div>}
   
    
    
    
    </div>
  )
}

export default PersonalInfo