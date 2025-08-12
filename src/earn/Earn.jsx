import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import EarnScreen from './EarnScreen';


const Earn = () => {
 
    const [activeTab, setActiveTab] = useState('about');
    const [activeScreen, setActiveScreen] = useState('about');
    const [copyUrl, setCopyUrl] = useState(false);

 
    
  return (
    <div className='w-full h-screen relative'>
    <div className="w-full px-5 ">
      
       <div className='grid   bg-white/5 backdrop-blur-sm h-[56px] grid-cols-4 items-center justify-center ' style={{boxShadow:'0.2px -0.2px  white'}}>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('about');setActiveScreen('promo')}}>
       
      <div  className='flex flex-col  relative h-full  items-center justify-center '>
      <span className={`text-white p-2 text-[16px] font-semibold`}>About</span> 
      {activeTab == 'about' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>
       
            
        </div>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('history');setActiveScreen('history')}}>
       
      <div   className='flex flex-col  relative h-full  items-center justify-center '>
      <span className='text-white p-2 text-[16px] font-semibold'>History</span> 
      {activeTab === 'history' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>      
            
        </div>   


        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('daily');setActiveScreen('daily')}}>
       
       <div   className='flex flex-col  relative h-full  items-center justify-center '>
       <span className='text-white p-2 text-[16px] font-semibold'>Daily</span> 
       {activeTab === 'daily' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
       </div>      
             
         </div>   
         <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('earn');setActiveScreen('earn')}}>
       
       <div   className='flex flex-col  relative h-full  items-center justify-center '>
       <span className='text-white p-2 text-[16px] font-semibold'>Earn</span> 
       {activeTab === 'earn' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
       </div>      
             
         </div>   

        
       </div>
       

       {activeScreen === 'earn' && <EarnScreen copyUrl={copyUrl} setCopyUrl={setCopyUrl} />}

 
    
    </div>
    {copyUrl && (
      <div className="w-full flex items-center justify-center">
        <div
        className={`
          px-4 py-1 bg-black rounded
       absolute 
          transition-all duration-[500ms] ease-in-out
          text-white
          ${copyUrl ? "bottom-[169px] opacity-100" : "bottom-0 opacity-0"}
        `}
      >
        Copy url
      </div>
      </div>
    )}

    </div>
  
  )
}

export default Earn