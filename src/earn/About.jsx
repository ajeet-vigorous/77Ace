import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const About = () => {
  const [show, setShow] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const handleShow = (index) => {
    setShow({
      ...show,
      [index]: !show[index],
    });
  };

  const toggleData = [
    {
      heading: "1. How to earn Commissions",
      data: [
        ".You can earn up to 1.5% of the daily wagers of players you refer. The higher your level, the higher the commission percentage you can earn.",
        ".If your affiliate or your affiliate becomes an agent and they are at a lower level than their immediate superior, then you can receive up to 1.2% of the affiliate's wagering betAmount amount. The commission rate depends on the level difference between you and your affiliate, the greater the level difference, the more commission you receive.",
      ],
    },
    {
      heading: "2. How to Invite your friends",
      data: [
        ".Share the game via social media or share the referral link to your friends.",
        ".Friends must click on your promotion link, download the App, install the game and register to start betting to get commission.",
        ".Registration must be completed through a referral link",
      ],
    },
    {
      heading: "3. whats the Purpose of level",
      data: [
        ".We have divided 13 levels based on the number of recommended users and betting performance.",
        ".Upgrade conditions requeire that the bet amount and team size meet the requeirements at the same time. The higher your level, the higher the commission percentage you will receive from members bet amounts.",
        ".Level difference: When the immediate superior minus the corresponding direct member level is ≥ 1, there is a level difference, otherwise there is no level difference.",
        ".The higher your level, the higher the commission percentage you get from level difference bets.",
      ],
    },
    {
      heading: "4. How to upgrade your level",
      data: [
        ".The more members you bring to the game and the more they bet, the higher the tiers you can get.",
        ".If you have extraordinary channel promotion capabilities, please contact our customer service center for verification.",
      ],
    },
    {
      heading: "5. How to turn your friends into members",
      data: [
        ".Log in to xxxx game, share your recommendation link with your friends on the recommendation page, guide them to register from the link, and they can become your direct members.",
        ".Encourage your members to invite their friends to play games, and the friends they invite will become your indirect members.",
        ".When friends of your direct members become your indirect members, they can still grow their membership this way. All their sub-members will be considered as your indirect sub-members.",
      ],
    },
    {
      heading: "6. How to get commission from your memebers",
      data: [
        ".You level V8. Betting amount 972000rs. Team members 49 people",
        ".A Level V8. Betting amount 760000rs. Team members 35 people.",
        ".B Level V6. Betting amount 210000rs. Team members 13 people.",
        ".C Level V1. Betting arnount 2000rs. Team members 1 person.",
        ".You can't get A's betting betAmount.",
        ".You can get 0.2% commission on the bet amount of B's entire team.",
        ".You can get 0.7% commission on the bet amount of C the entire team.",
      ],
    },
  ];

  const betAmountJson = [
    {
      id: 1,
      title: "V1",
      betAmount: "2000",
      teamMember: "1",
      rebate: "1.5",
    },
    {
      id: 2,
      title: "V2",
      betAmount: "50,000",
      teamMember: "2",
      rebate: "1.4",
    },
    {
      id: 3,
      title: "V3",
      betAmount: "1400,000",
      teamMember: "3",
      rebate: "1.3",
    },
    {
      id: 4,
      title: "V4",
      betAmount: "3,500,000",
      teamMember: "5",
      rebate: "1.2",
    },
    {
      id: 5,
      title: "V5",
      betAmount: "1,000,000",
      teamMember: "8",
      rebate: "1.1",
    },

    {
      id: 6,
      title: "V6",
      betAmount: "2,000,000",
      teamMember: "13",
      rebate: "1.0",
    },
    {
      id: 7,
      title: "V7",
      betAmount: "4,200,000",
      teamMember: "21",
      rebate: "0.9",
    },
    {
      id: 8,
      title: "V8",
      betAmount: "7,500,000",
      teamMember: "34",
      rebate: "0.8",
    },
    {
      id: 9,
      title: "V9",
      betAmount: "14,000,000",
      teamMember: "55",
      rebate: "0.7",
    },
    {
      id: 10,
      title: "V10",
      betAmount: "26,000,000",
      teamMember: "89",
      rebate: "0.6",
    },
    {
      id: 11,
      title: "V11",
      betAmount: "50,000,000",
      teamMember: "144",
      rebate: "0.5",
    },

    {
      id: 12,
      title: "V12",
      betAmount: "85000,000",
      teamMember: "233",
      rebate: "0.4",
    },
    {
      id: 13,
      title: "V13",
      betAmount: "160,000,000",
      teamMember: "377",
      rebate: "0.3",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="w-full flex flex-col items-center justify-start  h-full">
          <span className=" pt-10 text-yellow-200 text-[28px] font-semibold">
            Invite to Earn
          </span>
          <span className=" text-white">Simply Share Your</span>
          <span className=" text-white">Exclusive Qr Code</span>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img src="/navigationtab/earn/icon2.webp" alt="" />
        </div>
      </div>
      <div className="w-full h-[100px] sm:mt-0 mt-10 relative rounded-[10px] bg-[#2F2929]">
        <img
          className="w-12 absolute -top-4 left-4 object-cover"
          src="/navigationtab/earn/icon3.webp"
          alt=""
        />
        <div className="text-white px-2 pt-8 text-[14px]">
          Invite more friends and you will earn more .Every member who joins
          Skyace Club is both a player and an agent. Instant
        </div>
      </div>

      <div className="w-full h-[70px] sm:mt-8 mt-10 relative rounded-[10px] bg-[#2F2929]">
        <img
          className="w-12 absolute -top-5 left-4 object-cover"
          src="/navigationtab/earn/icon1.webp"
          alt=""
        />
        <div className="text-white px-3 pt-8 text-[14px]">
          we advocate benefits and bonuses for everyone.
        </div>
      </div>

      <div
        className="text-white font-bold text-center py-1 mt-8 shadow-inner "
        style={{
          background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
        }}
      >
        <div
          className="text-white uppercase text-[20px] font-bold text-center py-2 text-base border-b-2 border-t-2 border-[#2a0f0f] shadow-inner"
          style={{
            background: "linear-gradient(to right, #1a0e0e, #a31212, #1a0e0e)",
          }}
        >
          Agency Policy
        </div>
      </div>



      {toggleData.map((item, index) => (
        <div className="w-full">
          <div
            onClick={() => handleShow(index)}
            className={`w-full flex items-center justify-between ${
              show[index]
                ? "text-red-700 "
                : "text-white border-b border-white/20"
            }  py-3`}
          >
            <span className={`pl-5  text-[15px] font-semibold ${show[index] ? "text-red-700" : "text-white"}`}>
              {item.heading}
            </span>
            <div
              className={
                show[index]
                  ? "transform transition-all duration-[500ms] ease-in-out rotate-180"
                  : ""
              }
            >
              <MdOutlineKeyboardArrowDown size={25} />
            </div>
          </div>
          <div
            className={
              show[index]
                ? "w-full pl-5  text-white text-[15px] flex flex-col gap-4"
                : "hidden"
            }
          >
            {item.data.map((data, index) => (
              <span className="">
                {" "}
                {data}
                <br />
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="rounded-t-2xl mt-3 pb-48 w-full overflow-hidden">
        <table className="w-full table-auto border-1px rounded-t-[10px]">
          <thead>
            <tr className="text-white bg-gradient-to-t  rounded-t-[10px] from-[#A81212] to-[#AC1111] text-[14px] font-semibold">
              <th className="w-10 py-2">Level</th>
              <th className="w-10 py-2">Bet Amount</th>
              <th className="w-10 py-2">Team Member</th>
              <th className="w-10 py-2">Rebate</th>
            </tr>
          </thead>
          <tbody>
            {betAmountJson
              .slice()
              .reverse()
              .map((item) => (
                <tr
                  key={item.id}
                  className={`text-center text-white text-[14px]  font-semibold ${
                    item.id % 2 === 0 ? "bg-[#250F0F]" : "bg-[#231313]"
                  }`}
                >
                  <td className="py-1">{item.title}</td>
                  <td className="py-1">
                    <div className="flex justify-end items-center gap-1">
                      {item.betAmount}
                    </div>
                  </td>
                  <td className="py-1">{item.teamMember}</td>
                  <td className="py-1">{item.rebate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
