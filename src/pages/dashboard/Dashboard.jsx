import React, { useEffect, useState } from "react";

import { casinoTab, footerImages, sliderData } from "../../config/global";
import SliderComponent from "../../component/slider/Slider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotificationModal from "./NotificationModal";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("trendingGames");
  const token = localStorage.getItem("token");
  const { intGrupCsnoListData } = useSelector((state) => state.casino);
  const clientdomainSetting = JSON.parse(localStorage.getItem("clientdomainSetting"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dashboardModalOpen = localStorage.getItem("dashboardModalOpen")
  const [modalOpen, setModalOpen] = useState(dashboardModalOpen=="true"?true:false);
 

  const intGrupCsnoList = JSON.parse(localStorage.getItem("intGrupCsnoList"));
 

  const handleGameClick = (game) => {
    
    if (token) {
      navigate(`/iframe/${game.gameId}`);
    } else {
      navigate("/login");
    }
  };

  const allIntGrupCsnoListData = Object.values(
    Object.fromEntries(
      Object.entries(intGrupCsnoList || {}).filter(
        ([key]) => key !== "categoriesList" && key !== "providerList"
      )
    )
  ).flat();




  const setSliderData = clientdomainSetting?.banner?.map((item,index)=>{
    return {
      gameName: item.name,
      gameImg: item.image,
      gameLink: item.priority,
    }
  })

  const [openNotification, setOpenNotification] = useState(false);
  const handleNotificationClick = () => {
    setOpenNotification(prev => !prev);
  };

  

  return (
    <div className="w-full h-screen hide-scrollbar  overflow-auto ">
      {clientdomainSetting?.clientNotification && <div onClick={()=>{handleNotificationClick()}} className="w-full flex  flex-row h-[32px] mt-1 mb-3">
        <div className="flex items-center h-[32px] justify-end w-[56px] pr-2">
          <img src="/dashboard/speaker.svg" height={20} width={20} alt="" />
        </div>
        <div  className="flex items-center h-[32px] w-full text-white justify-center bg-gradient-to-r from-[#3a1414] via-[#1e0d0d] to-black">
          <marquee
            behavior="scroll"
            direction="left"
            className="text-white text-sm uppercase tracking-wide"
          >
            {clientdomainSetting?.clientNotification}
          </marquee>
        </div>
      </div>}

      {clientdomainSetting?.banner?.length > 0 && <SliderComponent sliderData={setSliderData} />}
  
      {clientdomainSetting?.banner?.length === 0 && <SliderComponent sliderData={sliderData} />}
    

      <div className="w-[98%] hide-scrollbar overflow-x-auto cursor-pointer flex gap-2 px-5 pt-4">
        {casinoTab.map((item, index) => {
          return (
            <img
              key={index}
              onClick={() => setActiveTab(item.casinoName)}
              className="sm:w-[78px] w-[65px] sm:h-[78px] h-[65px]"
              src={
                activeTab === item.casinoName
                  ? item.activeIcon
                  : item.inactiveIcon
              }
              alt=""
            />
          );
        })}
      </div>
      {/* new? */}
      {activeTab !== "allGames" && <div className="text-white flex items-center justify-start gap-2 font-semibold p-2 px-4 text-[18px] ">
        <img
          className="w-[20px] h-[20px]"
          src={casinoTab?.find((item) => item.casinoName === activeTab)?.icon}
          alt=""
        />
        {casinoTab?.find((item) => item.casinoName === activeTab).name}
      </div>}
      <div className="grid grid-cols-4  gap-x-3 gap-y-10 px-5">
        {activeTab !== "allGames"
          ? intGrupCsnoList?.[activeTab]?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    handleGameClick(item);
                  }}
                  key={index}
                  className="cursor-pointer sm:h-[125px]  rounded-[5px]"
                >
                  <img className="sm:w-full md:w-full rounded-[5px] h-[95px] sm:h-full"  src={item.urlThumb} alt={item.gameName} />
                  <div className="flex items-start w-full ">
  <span className="text-white truncate text-[14px] font-semibold">
    {item.gameName}
  </span>
</div>
                </div>
              );
            })
          : allIntGrupCsnoListData.map((item, index) => {
              return (
                <div
                onClick={() => {
                  handleGameClick(item);
                }}
                key={index}
                className="cursor-pointer mt-4  sm:h-[125px] rounded-[5px]"
              >
                <img className="sm:w-full  rounded-[5px] h-[95%] sm:h-full"  src={item.urlThumb} alt={item.gameName} />
                <div className="flex items-start w-full ">
  <span className="text-white truncate text-[14px] font-semibold">
    {item.gameName}
  </span>
</div>
              </div>
              );
            })}
      </div>
      

      <div className="w-full justify-center items-center grid grid-cols-4 gap-x-10 gap-y-6 mt-16 px-6 ">
      {intGrupCsnoList?.providerList
      .map(provider =>
        footerImages.find(img => img.providerName === provider)
      )
      .filter(Boolean)
      .map((item, index) => (
        <div key={index}>
          <img
            className="w-[77px] h-[25px]"
            src={item.img}
            alt={item.providerName || "provider"}
          />
        </div>
      ))}
      </div>
      <div className="w-full bg-[#2E2929] p-6 mb-[150px] mt-10 gap-4 flex flex-col  items-center justify-start shrink-0 ">
        <div className="w-full flex items-center  justify-center">
          <img
            className="w-[80px] h-[30px]"
            src="/footerImg/logo-foot.png"
            alt=""
          />
        </div>
        <p className="text-[#8A8888] text-center text-[13px]">
          This Website offers gaming with risk experience. To be user of our
          site you must be over 18 y.o. we are not responsible for the voilation
          of your local laws.
        </p>
      </div>
      {modalOpen ? (
        <div onClick={(e)=>{setModalOpen(false);}} className="fixed inset-0 z-50 flex items-center justify-center bg-black px-2 bg-opacity-50">
            <div onClick={(e)=>{e.stopPropagation()}} className="flex gap-2 flex-col items-center justify-center">
            <img src='/dashboard/17440976301742967378abnner8-1.webp' className="w-[350px]  h-[440px]"/>
            <div className=" flex text-white gap-2 items-center justify-center">
              <input onChange={(e)=>{setModalOpen(false);localStorage.setItem("dashboardModalOpen", false);}}  type="checkbox" className="w-[15px] h-[15px]"/>
              <label>Do not show this again!</label>
            </div>
            </div>
        </div>
      ) : null}
 {openNotification && (
        <NotificationModal handleNotificationClick={handleNotificationClick} />
      )}

     
    </div>
  );
};

export default React.memo(Dashboard);
