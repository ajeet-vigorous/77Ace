import {  useNavigate } from "react-router-dom";
import { sidebarJson } from "../../config/global";
import { Divider } from "antd";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


const AppSidebar = ({toggleSidebar}) => {
  const [promoOpen, setPromoOpen] = useState(false);
  const togglePromo = () => setPromoOpen(prev => !prev);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (token) {
      navigate(item.path);
      toggleSidebar()
      
    }else if(item.path === '/') {
      navigate('/dashboard');
      toggleSidebar()
    }else {
      navigate('/login');
      toggleSidebar()
    }
  }

  return (
    <div className="flex p-5 gap-5 flex-col h-full">
      {sidebarJson.tabs.map((item,index)=>{
        return(
         
            <div key={index} onClick={()=>{handleNavigation(item)}} className="flex items-center justify-start  gap-5 rounded-md bg-[#2E2929] h-[60px]">
                <div className="flex w-full items-center justify-start   gap-3  cursor-pointer  h-[60px]">
              <img src={item.icon} alt="" className="ml-6" height={20} width={20} />
              <span className="text-white font-semibold">{item.name}</span>
              </div>
            </div>
          
        )
      })}

        <hr className="border-none opacity-50 bg-[#2E2929]   mt-2  h-[2px]" />
        <div className={`w-full flex flex-col px-4 bg-[#2E2929]  ${promoOpen ? 'rounded-[5px]' : 'rounded-sm'}`}>
          <div className="w-full  flex py-2.5  justify-between items-center">
            <div className="w-full   cursor-pointer" onClick={togglePromo}>
              <span className="text-[#5A5656] text-[19px] font-semibold">Promo</span>
            </div>
          
           <FaAngleDown size={20} className={`text-[#5A5656] transition-all duration-500 ease-in-out  ${promoOpen ? 'rotate-180' : ''}`} />
          


          </div>

        <div className={`w-full transition-all duration-500 ease-in-out flex flex-col gap-2  ${promoOpen ? 'h-auto' : 'h-[0px]'}`}>
        {promoOpen && <> <hr className="border-none opacity-70 bg-[#393434]  mt-2 mb-0.5 h-[2px]" />
          
     {sidebarJson.promo.map((item,index)=>{
          return(
            <div key={index} onClick={()=>{handleNavigation(item.path)}} className="flex items-center justify-start  gap-10 rounded-md ">
                <div className="flex w-[150px] items-center justify-start   gap-3   cursor-pointer  h-[60px]">
              <img src={item.icon} alt="" className="" height={28} width={28} />
              <span className="text-white text-[17px] font-semibold ">{item.name}</span>
              </div>
            </div>
          )
        })}
      <hr className="border-none opacity-70 bg-[#393434]  mt-2 mb-1 h-[2px]" />

      <div className="w-full flex items-center justify-center pb-1">
        <span className="text-[#5A5656] text-[15px] font-semibold">More</span>
      </div>
      </> }
        </div>
        </div>


        <button onClick={()=>{navigate('/download')}} className="w-full flex items-center justify-center py-3 rounded-md bg-gradient-to-b from-[#d42a2a] to-[#880f0f]">
          <div className="text-white font-semibold flex items-center justify-center gap-2"><IoMdDownload size={22} /> Download <img src="" alt="" /> </div>
        </button>


    </div>
  );
};

export default AppSidebar;
