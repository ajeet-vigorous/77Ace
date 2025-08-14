import React from "react";
import VipSlider from "../../../component/slider/VipSlider";


const Vip = () => {
  const vipJson = [
    {
      gameName: "Game 1",
      gameImg: "/Promo/vip/v0-card.webp",
      gameLink: "/game-1",
    },
    {
      gameName: "Game 2",
      gameImg: "/Promo/vip/v1-card.webp",
      gameLink: "/game-2",
    },
    {
      gameName: "Game 3",
      gameImg: "/Promo/vip/v2-card.webp",
      gameLink: "/game-3",
    },
    {
      gameName: "Game 4",
      gameImg: "/Promo/vip/v3-card.webp",
      gameLink: "/game-4",
    },
    {
      gameName: "Game 5",
      gameImg: "/Promo/vip/v4-card.webp",
      gameLink: "/game-5",
    },
    {
      gameName: "Game 6",
      gameImg: "/Promo/vip/v5-card.webp",
      gameLink: "/game-6",
    },
    {
      gameName: "Game 7",
      gameImg: "/Promo/vip/v6-card.webp",
      gameLink: "/game-7",
    },
    {
      gameName: "Game 8",
      gameImg: "/Promo/vip/v7-card.webp",
      gameLink: "/game-8",
    },
    {
      gameName: "Game 9",
      gameImg: "/Promo/vip/v8-card.webp",
      gameLink: "/game-9",
    },
    {
      gameName: "Game 10",
      gameImg: "/Promo/vip/v9-card.webp",
      gameLink: "/game-10",
    },
    {
      gameName: "Game 11",
      gameImg: "/Promo/vip/v10-card.webp",
      gameLink: "/game-11",
    },
    {
      gameName: "Game 12",
      gameImg: "/Promo/vip/v11-card.webp",
      gameLink: "/game-12",
    },
    {
      gameName: "Game 13",
      gameImg: "/Promo/vip/v12-card.webp",
      gameLink: "/game-13",
    },
  ];

  const rewards = [
    {
     name: "Level Upgrade",
     description: 'Rewards',
     img: '/Promo/vip/vip-levelupgrade.webp',
     logo :'/Promo/vip/lock.svg',
     amount: '20',
    },
    {
     name: "Monthly ",
     description: 'Reward',
     img: '/Promo/vip/vip-monthly.webp',
     logo :'/Promo/vip/yes.svg',
     amount: '5000',    
    },
    {
     name: "Daily",
     description: 'Limit',
     img: '/Promo/vip/vip-dailywithdrawalLimit.webp',
     logo :'/Promo/vip/yes.svg',
     amount: '38',    
    }


  ] 

  const rebateJson = {
    first:[
        {
          id: 1,
          title: "VIP 0",
          rebate: "0",
        },
        {
          id: 2,
          title: "VIP 1",
          rebate: "5000",
        },
        {
          id: 3,
          title: "VIP 2",
          rebate: "10000",
        },
        {
          id: 4,
          title: "VIP 3",
          rebate: "20000",
        },
        {
          id: 5,
          title: "VIP 4",
          rebate: "50000",
        },
        {
          id: 6,
          title: "VIP 5",
          rebate: "100000",
        },
    
        {
          id: 7,
          title: "VIP 6",
          rebate: "200000",
        },
        {
          id: 8,
          title: "VIP 7",
          rebate: "500000",
        },
        {
          id: 9,
          title: "VIP 8",
          rebate: "1000000",
        },
        {
          id: 10,
          title: "VIP 9",
          rebate: "2000000",
        },
        {
          id: 11,
          title: "VIP 10",
          rebate: "5000000",
        },
    
        {
          id: 12,
          title: "VIP 11",
          rebate: "10000000",
        },
        {
          id: 13,
          title: "VIP 12",
          rebate: "20000000",
        },
      ],
      second:[
        {
          id: 1,
          title: "VIP 0",
          rebate: "0",
        },
        {
          id: 2,
          title: "VIP 1",
          rebate: "20",
        },
        {
          id: 3,
          title: "VIP 2",
          rebate: "25",
        },
        {
          id: 4,
          title: "VIP 3",
          rebate: "50",
        },
        {
          id: 5,
          title: "VIP 4",
          rebate: "100",
        },
        {
          id: 6,
          title: "VIP 5",
          rebate: "200",
        },
    
        {
          id: 7,
          title: "VIP 6",
          rebate: "300",
        },
        {
          id: 8,
          title: "VIP 7",
          rebate: "1000",
        },
        {
          id: 9,
          title: "VIP 8",
          rebate: "2000",
        },
        {
          id: 10,
          title: "VIP 9",
          rebate: "3000",
        },
        {
          id: 11,
          title: "VIP 10",
          rebate: "10000",
        },
    
        {
          id: 12,
          title: "VIP 11",
          rebate: "20000",
        },
        {
          id: 13,
          title: "VIP 12",
          rebate: "30000",
        },
      ],
      third:[
        {
          id: 1,
          title: "VIP 0",
          rebate: "0",
        },
        {
          id: 2,
          title: "VIP 1",
          rebate: "38",
        },
        {
          id: 3,
          title: "VIP 2",
          rebate: "88",
        },
        {
          id: 4,
          title: "VIP 3",
          rebate: "188",
        },
        {
          id: 5,
          title: "VIP 4",
          rebate: "388",
        },
        {
          id: 6,
          title: "VIP 5",
          rebate: "588",
        },
    
        {
          id: 7,
          title: "VIP 6",
          rebate: "888",
        },
        {
          id: 8,
          title: "VIP 7",
          rebate: "1888",
        },
        {
          id: 9,
          title: "VIP 8",
          rebate: "3888",
        },
        {
          id: 10,
          title: "VIP 9",
          rebate: "8888",
        },
        {
          id: 11,
          title: "VIP 10",
          rebate: "28888",
        },
    
        {
          id: 12,
          title: "VIP 11",
          rebate: "58888",
        },
        {
          id: 13,
          title: "VIP 12",
          rebate: "88888",
        },
      ],
      fourth:[
        {
          id: 1,
          title: "VIP 0",
          rebate: "0",
        },
        {
          id: 2,
          title: "VIP 1",
          rebate: "38",
        },
        {
          id: 3,
          title: "VIP 2",
          rebate: "88",
        },
        {
          id: 4,
          title: "VIP 3",
          rebate: "188",
        },
        {
          id: 5,
          title: "VIP 4",
          rebate: "388",
        },
        {
          id: 6,
          title: "VIP 5",
          rebate: "588",
        },
    
        {
          id: 7,
          title: "VIP 6",
          rebate: "888",
        },
        {
          id: 8,
          title: "VIP 7",
          rebate: "1888",
        },
        {
          id: 9,
          title: "VIP 8",
          rebate: "3888",
        },
        {
          id: 10,
          title: "VIP 9",
          rebate: "8888",
        },
        {
          id: 11,
          title: "VIP 10",
          rebate: "28888",
        },
    
        {
          id: 12,
          title: "VIP 11",
          rebate: "58888",
        },
        {
          id: 13,
          title: "VIP 12",
          rebate: "88888",
        },
      ]
  }
  return (
    <div >
        <div className="px-2 ">
       
      <VipSlider sliderData={vipJson} />
      </div>
      <div className="grid grid-cols-3 h-[170px] sm:mt-2 mt-20 px-4  gap-2.5 ">
        {
          rewards.map((item,index)=>{
            return(
              <div key={index} className="w-full bg-[#302A2A] rounded-xl h-full p-1 gap-1 flex flex-col items-center justify-center">
                <img className="w-[40px] h-[40px]" src={item.img} alt="" />
                <p className="text-white text-[13px] font-semibold">{item.name}</p>
                <p className="text-white text-[12px]">{item.description}</p>
                <div className="text-white bg-[#433F3F] rounded-md py-0.5 px-4">{item.amount}</div>
                <img className="mt-1" src={item.logo} alt="" />
              </div>
            )
          }) 
        }
      </div>
      <div className="w-full flex items-center justify-center my-4 text-[20px] px-6  font-semibold text-white">
        Monthly Cumulative Deposite An Upgrade Vip Level
      </div>
      <div className="px-6 mb-48">

      <div className="rounded-t-2xl mt-3 w-full overflow-hidden">
          <table className="w-full table-auto border-1px rounded-t-[10px]">
            <thead>
              <tr className="text-white bg-gradient-to-t  rounded-t-[10px] from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
                <th className="w-full flex justify-center items-center ">
                  <img
                    src="Promo/download2.png"
                    alt=""
                    className=" h-[43px] w-[43px]"
                  />
                </th>
                <th className="text-[18px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rebateJson.first.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`text-center text-white text-[15px] font-semibold ${
                      item.id % 2 == 0 ? "bg-[#250F0F]" : "bg-[#231313]"
                    }`}
                  >
                    <td>{item.title}</td>
                    <td> <div className="flex justify-center items-center gap-1"> <img src="Promo/vip/vip-tableicon.webp" alt="" className="h-[20px] w-[20px]" />{item.rebate}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>


        <div className="text-white px-8 text-[12px] mt-2 text-center">After the recharge on the day reaches the standard , the next day will increase the VIP level and issue corresponding Upgrade rewards</div>

        <div className="rounded-t-2xl mt-3 w-full overflow-hidden">
          <table className="w-full table-auto border-1px rounded-t-[10px]">
            <thead>
              <tr className="text-white bg-gradient-to-t  rounded-t-[10px] from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
                <th className="w-full flex justify-center items-center ">
                  <img
                    src="Promo/download2.png"
                    alt=""
                    className=" h-[43px] w-[43px]"
                  />
                </th>
                <th className="text-[18px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rebateJson.second.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`text-center text-white text-[15px] font-semibold ${
                      item.id % 2 == 0 ? "bg-[#250F0F]" : "bg-[#231313]"
                    }`}
                  >
                    <td>{item.title}</td>
                    <td> <div className="flex justify-center items-center gap-1"> <img src="Promo/vip/vip-tableicon.webp" alt="" className="h-[20px] w-[20px]" />{item.rebate}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="text-white px-8 text-[12px] mt-2 text-center">Promotiom Bonus : Every Time you advance , you can instantly receive a promotion rewards </div>
      
        <div className="rounded-t-2xl mt-3 w-full overflow-hidden">
          <table className="w-full table-auto border-1px rounded-t-[10px]">
            <thead>
              <tr className="text-white bg-gradient-to-t  rounded-t-[10px] from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
                <th className="w-full flex justify-center items-center ">
                  <img
                    src="Promo/download2.png"
                    alt=""
                    className=" h-[43px] w-[43px]"
                  />
                </th>
                <th className="text-[18px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rebateJson.third.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`text-center text-white text-[15px] font-semibold ${
                      item.id % 2 == 0 ? "bg-[#250F0F]" : "bg-[#231313]"
                    }`}
                  >
                    <td>{item.title}</td>
                    <td> <div className="flex justify-center items-center gap-1"> <img src="Promo/vip/vip-tableicon.webp" alt="" className="h-[20px] w-[20px]" />{item.rebate}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="text-white px-8 text-[12px] mt-2 text-center">Cash Bonus : Based on ypur VIP level at the end of this month , this reward will be send to you  at 10 a.m. on the 1st of next month  </div>
        <div className="rounded-t-2xl mt-3 w-full overflow-hidden">
          <table className="w-full table-auto border-1px rounded-t-[10px]">
            <thead>
              <tr className="text-white bg-gradient-to-t  rounded-t-[10px] from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
                <th className="w-full flex justify-center items-center ">
                  <img
                    src="Promo/download2.png"
                    alt=""
                    className=" h-[43px] w-[43px]"
                  />
                </th>
                <th className="text-[18px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rebateJson.fourth.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`text-center text-white text-[15px] font-semibold ${
                      item.id % 2 == 0 ? "bg-[#250F0F]" : "bg-[#231313]"
                    }`}
                  >
                    <td>{item.title}</td>
                    <td> <div className="flex justify-center items-center gap-1"> <img src="Promo/vip/vip-tableicon.webp" alt="" className="h-[20px] w-[20px]" />{item.rebate}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="text-white px-8 text-[13px] mt-2 text-center my-4 sm:pb-10 pb-4"> Daily  withdrawal limit based on VIP levels  </div>
         </div>

        
        
    </div>
  );
};

export default Vip;
