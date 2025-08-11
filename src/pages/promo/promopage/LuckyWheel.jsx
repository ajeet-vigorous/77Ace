import React from "react";

const LuckyWheel = () => {

  return (
    <div className="w-full h-screen overflow-y-auto hide-scrollbar">
     

        <div
          className="text-white font-bold text-center py-2 mt-2 shadow-inner "
          style={{
            background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
          }}
        >
          <div
            className="text-white font-bold text-center py-2 text-base border-b-2 border-t-2 border-[#2a0f0f] shadow-inner"
            style={{
              background:
                "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
            }}
          >
            Activity Rules
          </div>
        </div>

       <div className="w-full px-3">
       <div className="mt-2 flex flex-col mb-56 gap-6">
            <span className="text-white text-[13px]  ">
                1. When the accumulated amount reaches ₹500, you can apply for withdrawal (Rewards will add to your wallet directly).
                </span>
                <span className="text-white text-[13px]  ">
                2. When there are no spin available, refer a new player to get a free spin.
                </span>
                <span className="text-white text-[13px]  ">
                3. The event lasts for 3 days. After the event, the accumulated bonus will be reset, and the event will start again.
                </span>
                <span className="text-white text-[13px]  ">
                4.Each user can enjoy one free spin opportunity per day, the free spins will be added at 12:00 a.m. every day.
                </span>
                <span className="text-white text-[13px]  ">
                5.After the application is approved, the bonus is deposited directly into your wallet.
                </span>
                <span className="text-white text-[13px]  ">
                6.The bonus needs to be rolled over once before it can be withdrawn.
                
                
            </span>
            <span className="text-white text-[13px]  ">
            7.The invitee must bind their phone number and register via inviter's invitation link to be considered for the recommendation.
            </span>
            <span className="text-white text-[13px]  ">
            8. The more your invitees play on the website, the higher your next spin reward will be. Invite friends and win more rewards together!
            </span>
            <span className="text-white text-[13px]  ">
            9.The right to interpret the event belongs to 77Ace. If you have any questions, please contact to customer service.
            </span>
        </div>
       </div>


      </div>
  
  );
};

export default LuckyWheel;
