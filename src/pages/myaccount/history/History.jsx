import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBetListfunc } from '../../../redux/reducers/user_reducer';
import { useDispatch } from 'react-redux';

const History = () => {
  const [activeTab, setActiveTab] = useState("1 Day");
  const tabs = ["1 Day", "7 Day", "30 Day"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const reqData = {
      fancyBet: true,
      oddsBet: true,
      casinoBet: true,
      isDeleted: false,
     
    };
    dispatch(getBetListfunc(reqData))
  },[])

  return (
    <div className="w-full ">
      {/* Header */}
      <div className="flex px-7 pt-5 rounded-[5px] items-center justify-start gap-40">
        <img
          onClick={() => navigate(-1)}
          className="cursor-pointer w-[35px] h-[35px]"
          src="/backbutton/back-button.webp"
          alt=""
        />
        <span className="text-white text-[19px] font-semibold">History</span>
      </div>

      {/* Tabs */}
      <div className="flex justify-between px-10 border-b border-gray-600 mt-5">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 cursor-pointer text-[14px] font-medium relative 
              ${activeTab === tab ? "text-red-500" : "text-gray-300"}`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 rounded-full"></span>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 text-gray-400 text-[14px] text-center">
        There is no betting record during the current time period.
      </div>
    </div>
  )
}

export default History
