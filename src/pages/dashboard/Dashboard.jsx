import React, { useState } from "react"

import { casinoTab, footerImages, sliderData } from "../../config/global"
import SliderComponent from "../../component/slider/Slider"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('1');
  return (
  <div className="w-full h-screen hide-scrollbar  overflow-auto " >
    <div className="w-full flex  flex-row h-[32px] mt-1 mb-3">
      <div className="flex items-center h-[32px] justify-end w-[56px] pr-2">
        <img src="/dashboard/speaker.svg" height={20} width={20} alt="" />
       
      </div>
      <div className="flex items-center h-[32px] w-full text-white justify-center bg-gradient-to-r from-[#3a1414] via-[#1e0d0d] to-black">
  <marquee behavior="scroll" direction="left" className="text-white text-sm uppercase tracking-wide">
    Welcome
  </marquee>
</div>

    </div>
    <SliderComponent sliderData={sliderData} />

    <div className="w-[98%] hide-scrollbar overflow-x-auto cursor-pointer flex gap-2 px-4 pt-4">
   
        {
          casinoTab.map((item,index)=>{
            return(
             
                <img key={index} onClick={()=>setActiveTab(item.id)} className="w-[78px] h-[78px]" src={activeTab === item.id ? item.activeIcon : item.inactiveIcon} alt="" />
            
            )
          })
        }
        

    

    </div>
{/* new? */}
    <div className="text-white flex items-center justify-start gap-2 font-semibold p-2 text-[18px] ">
      <img className="w-[20px] h-[20px]" src={casinoTab?.find((item)=>item.id === activeTab).icon} alt="" />
        {
          
          casinoTab?.find((item)=>item.id === activeTab).name
        } 

    </div>
    <div className="grid grid-cols-4 gap-3 px-3">
      {
        casinoTab?.find((item)=>item.id === activeTab)?.games?.map((item,index)=>{
          return(
            <div key={index}>
              <img src={item.img} alt={item.name} />
              <div className="text-white flex items-center justify-center text-[14px] font-semibold">
                {item.name}
              </div>
            </div>
          )
        })
      }
      
    </div>


      <div className="w-full justify-center items-center grid grid-cols-4 gap-x-10 gap-y-6 mt-6 px-6 ">
        {
          footerImages.map((item,index)=>{
            return(
              <div key={index}>
                <img className="w-[77px] h-[25px]" src={item.img} alt={item.name} />
               
              </div>
            )
          })
        }
        
      </div>
      <div className="w-full bg-[#2E2929] p-6 mb-[150px] mt-10 gap-4 flex flex-col  items-center justify-start shrink-0 ">
       <div className="w-full flex items-center  justify-center">
       <img className="w-[80px] h-[30px]" src="/footerImg/logo-foot.png" alt="" />
       </div>
       <p className="text-[#8A8888] text-center text-[13px]">
        This  Website offers gaming with risk experience. To be user of our site you must be over 18 y.o. we are not responsible for the voilation of your local laws.
       </p>
         
        </div>
    
    
    
  </div>

  )
}

export default React.memo(Dashboard)