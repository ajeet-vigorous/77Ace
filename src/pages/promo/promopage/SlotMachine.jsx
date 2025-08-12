import React from "react";

const SlotMachine = ({ setScreen }) => {
  const rebateJson = [
    {
      id: 1,
      title: "VIP 0",
      rebate: "1%",
    },
    {
      id: 2,
      title: "VIP 1",
      rebate: "1%",
    },
    {
      id: 3,
      title: "VIP 2",
      rebate: "1%",
    },
    {
      id: 4,
      title: "VIP 3",
      rebate: "2%",
    },
    {
      id: 5,
      title: "VIP 4",
      rebate: "2%",
    },
    {
      id: 6,
      title: "VIP 5",
      rebate: "2%",
    },

    {
      id: 7,
      title: "VIP 6",
      rebate: "3%",
    },
    {
      id: 8,
      title: "VIP 7",
      rebate: "3%",
    },
    {
      id: 9,
      title: "VIP 8",
      rebate: "3%",
    },
    {
      id: 10,
      title: "VIP 9",
      rebate: "4%",
    },
    {
      id: 11,
      title: "VIP 10",
      rebate: "4%",
    },

    {
      id: 12,
      title: "VIP 11",
      rebate: "5%",
    },
    {
      id: 13,
      title: "VIP 12",
      rebate: "5%",
    },
  ];
  return (
    <div className="w-full h-screen overflow-y-auto hide-scrollbar">
      <img className="w-full mt-1.5 " src="Promo/17327146465.webp" alt="" />
      <div className="flex flex-col gap-2 p-6">
        <div className=" text-[23px]  font-semibold text-[#FEF05E]">
          Slot Machine Weekly Loss Rebate
        </div>
        <div className="flex items-center justify-start mt-6 bg-[#2F2929] ">
          <img
            src="Promo/download.png"
            alt=""
            className="m-2 h-[40px] w-[40px]"
          />
          <div>
            <span className="text-white text-[14px] font-semibold">
              Rebate insurance time :{" "}
              <span className="text-[#FEF05E] text-[12px]">
                Your rewards from previous week will be distribuetd every monday
              </span>
            </span>
          </div>
        </div>
        <div className="rounded-t-[10px] mt-3 w-full overflow-hidden">
          <table className="w-full table-auto border-1px">
            <thead>
              <tr className="text-white bg-gradient-to-t  from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
                <th className="w-full flex justify-center items-center ">
                  <img
                    src="Promo/download2.png"
                    alt=""
                    className=" h-[32px] w-[32px]"
                  />
                </th>
                <th className="text-[18px]">Rebate</th>
              </tr>
            </thead>
            <tbody>
              {rebateJson.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={`text-center text-white text-[15px] font-semibold ${
                      item.id % 2 == 0 ? "bg-[#2A1112]" : "bg-[#4C1111]"
                    }`}
                  >
                    <td>{item.title}</td>
                    <td>{item.rebate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

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
            Event Rules
          </div>
        </div>

        <div className="mt-2 flex flex-col mb-56 gap-6">
            <span className="text-white text-[17px]  font-semibold">
                1. Receive weekly loss rebates based on your VIP level. Example: If a Vip1 loses 1000rs in a week, they will receive a 10rs rebate.
                </span>
                <span className="text-white text-[17px]  font-semibold">
                2. The rebate applies only to slot machine players (if a player participates in other games, only slot machine losses will be considered for the rebate).
                </span>
                <span className="text-white text-[17px]  font-semibold">
                3. The rebate is automatically issued every Monday.
                </span>
                <span className="text-white text-[17px]  font-semibold">
                4. Withdrawal requirements: To withdraw the bonus, players must meet a 1x turnover. For example, if you receive a 1000rs bonus, you need to wager 1000rs before withdrawing.
                </span>
                <span className="text-white text-[17px]  font-semibold">
                5. If any user or organization is found to be engaging in arbitrage activities in an improper manner, the platform reserves the right to freeze the associated account without notice, with no refund, and the player will be blacklisted.
                </span>
                <span className="text-white text-[17px]  font-semibold">
                6. 77ACE reserves the final right of interpretation for this event and may modify the event details or terminate it without prior notice.
                
                
            </span>
        </div>


      </div>
    </div>
  );
};

export default SlotMachine;
