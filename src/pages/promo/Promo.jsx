import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PromoPage from './promopage/PromoPage';
import SlotMachine from './promopage/SlotMachine';
import Viprewards from './promopage/viprewards';
import EarnMoney from './promopage/EarnMoney';
import RechargeExtra from './promopage/RechargeExtra';
import LuckyWheel from './promopage/LuckyWheel';

const Promo = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('promo');
    const [activeScreen, setActiveScreen] = useState('promo');

 useEffect(() => {
    if (location.state?.defaultTab === 'promo') {
      setActiveTab('promo');
      setActiveScreen('promo');
     
    }
  }, [location.state]);
    
  return (
    <div className='w-full'>
    <div className="w-full px-5 ">
      
       <div className='grid   bg-white/5 backdrop-blur-sm h-[56px] grid-cols-2 items-center justify-center ' style={{boxShadow:'0.2px -0.2px  white'}}>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('promo');setActiveScreen('promo')}}>
       
      <div  className='flex flex-col  relative h-full  items-center justify-center '>
      <span className={`text-white p-2 text-[16px] font-semibold`}>Promo</span> 
      {activeTab == 'promo' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>
       
            
        </div>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setActiveTab('vip');setActiveScreen('vip')}}>
       
      <div   className='flex flex-col  relative h-full  items-center justify-center '>
      <span className='text-white p-2 text-[16px] font-semibold'>VIP</span> 
      {activeTab === 'vip' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>      
            
        </div>   
        
       </div>

       {
        activeScreen === 'promo' && <PromoPage setScreen={setActiveScreen} />
       }
       {
        activeScreen === 'slotmachine' && <SlotMachine setScreen={setActiveScreen} />
       }
       {
        activeScreen === 'luckywheel' && <LuckyWheel />
       }
      

    
    </div>
    {
        activeScreen === 'viprewards' && <Viprewards />
       }
       {
        activeScreen === 'earnmoney' && <EarnMoney />
       }
       {
        activeScreen === 'rechargeextra' && <RechargeExtra />
       }
    </div>
  
  )
}

export default Promo