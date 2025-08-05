import React from "react"

import { sliderData } from "../../config/global"
import SliderComponent from "../../component/slider/Slider"

const Dashboard = () => {
  return (
  <div className="w-full h-full " >
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

    <div className="w-full p-2">
      <div className="w-full  overflow-auto shrink-0">
        

      </div>

    </div>
    
    
    
  </div>

  )
}

export default React.memo(Dashboard)