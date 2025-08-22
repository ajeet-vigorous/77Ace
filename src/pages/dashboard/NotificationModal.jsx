import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiSpeakerHighDuotone } from "react-icons/pi";

const NotificationModal = ({ handleNotificationClick }) => {
  const notification = JSON.parse(localStorage?.getItem("clientdomainSetting"));
  const [hideNotification, setHideNotification] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      onClick={handleNotificationClick}
      className="inset-0 absolute px-5 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[500px] py-4 px-6 rounded-[10px] bg-[#0F0C0C]"
      >
        {/* Close Button */}
        <div
          onClick={handleNotificationClick}
          className="w-full flex items-center justify-end text-white text-[20px] font-semibold cursor-pointer"
        >
          <span>X</span>
        </div>

        {/* Title */}
        <div className="w-full flex items-center justify-center text-white text-[20px] font-semibold">
          <span>Notifications</span>
        </div>

        {/* Toggle Notification */}
        <div
          onClick={() => {
            if (hideNotification) {
              // If it's hidden, reset isHidden so it becomes visible again
              setIsHidden(false);
            }
            setHideNotification((prev) => !prev);
          }}
          className="w-full flex bg-[#251C1C] p-2 border-[3px] mt-5 border-gray-400/10 rounded-[16px] items-center justify-between text-white text-[20px] font-semibold cursor-pointer"
        >
          <div className="flex items-center justify-start gap-2">
            <PiSpeakerHighDuotone size={18} />
            <span className="text-[18px] font-[300]">welcome</span>
          </div>
          <div>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        {/* Notification message */}
        {!isHidden && (
          <div
            onTransitionEnd={() => {
              if (hideNotification) {
                setIsHidden(true); // remove only after animation completes
              }
            }}
            className={`w-full flex items-center text-[#A4A3A3] transition-all ease-in-out duration-300 justify-start px-5 mt-5
              ${hideNotification ? "translate-y-[-15px] opacity-0" : "translate-y-0 opacity-100"}
            `}
          >
            <span>{notification?.clientNotification}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationModal;
