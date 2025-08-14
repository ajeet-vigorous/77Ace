import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBetListfunc } from '../../../redux/reducers/user_reducer';
import { useDispatch, useSelector } from 'react-redux';

const History = () => {
  const [activeTab, setActiveTab] = useState("1 Day");
  const tabs = ["1 Day", "7 Day", "30 Day"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userBetHistory, setUserBetHistory] = useState([]);

    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null })

    const {betList} = useSelector((state) => state.user);

    const updateDateRange = (tab) => {
      const today = new Date();
      let startDate, endDate;
  
      if (tab === "1 Day") {
        endDate = formatDate(today);
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        startDate = formatDate(yesterday);
      } 
      else if (tab === "7 Day") {
        endDate = formatDate(today);
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 6); 
        startDate = formatDate(pastDate);
      } 
      else if (tab === "30 Day") {
        endDate = formatDate(today);
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 29); 
        startDate = formatDate(pastDate);
      }
  
      setDateRange({ startDate, endDate });
    };
  
    const formatDate = (date) => {
      return date.toISOString().split("T")[0]; 
    };
  
    useEffect(() => {
      updateDateRange(activeTab);
    }, [activeTab]);

  
    
  useEffect(() => {
    if (betList) {
      const casinoBetData = betList?.casinoBetData;
      let filteredCasinoData = [];
      if (Array.isArray(casinoBetData)) {
        casinoBetData.forEach((casinoData) => {
          filteredCasinoData.push({
            userInfo: casinoData?.userInfo,
            description: casinoData?.subProviderName,
            selection: "Casino",
            selectionId: casinoData?.selectionId,
            stack: casinoData?.actualBetAmount,
            odds: casinoData?.odds,
            Type: "Casino Odds",
            createdAt: casinoData?.createdAt,
            profit: casinoData?.debitAmount,
            loss: casinoData?.creditAmount,
            type: casinoData?.type,
            isDeclare: casinoData?.isDeclare,
            ip: casinoData?.ip,
            run: "",
            oddsType: casinoData?.oddsType,
            positionInfo: casinoData?.positionInfo,
            providerName: casinoData?.providerName,

            // "betType": "Casino",
            // "actualBetAmount": 20,
            // "debitAmount": 40,
            // "creditAmount": 0,
            // "rollbackAmount": 0,
            // "rollbackReason": "",
            // "gameId": "201206",
            // "gameName": "AVIATOR",
            // "providerName": "DC",
            // "subProviderName": "Spribe",
            // "operatorId": "",
            // "transactionId": "841d77e2-ea49-54b4-a8fe-513b3b49a61d",
            // "roundId": "fcfbec36-18d3-5609-a993-a821fd5779d1",
            // "isDeclare": true,
            // "isDeleted": false,
            // "userInfo": {
            //     "username": "shubham",
            //     "name": "shubham"
            // },
            // "ip": null,
            // "createdAt": "2025-01-13T07:51:37.471Z",
            // "id": "6784c6094a27e543220c8c96"
          });
        });
      }

      const fancyBetData = betList?.fancyBetData;
      let filteredFancyData = [];
      if (Array.isArray(fancyBetData)) {
        fancyBetData.forEach((fancyData) => {
          filteredFancyData.push({
            userInfo: fancyData?.userInfo,
            description: fancyData?.sessionName,
            selection: "Fancy",
            selectionId: fancyData?.selectionId,
            stack: fancyData?.amount,
            odds: fancyData?.odds,
            run: fancyData?.run,
            Type: "Fancy Odds",
            createdAt: fancyData?.createdAt,
            profit: fancyData?.profit,
            loss: fancyData?.loss,
            type: fancyData?.type,
            isDeclare: fancyData?.isDeclare,
            ip: fancyData?.ip,
            oddsType: fancyData?.oddsType,
            positionInfo: fancyData?.positionInfo,
          });
        });
      }

      const oddsBetData = betList?.oddsBetData;
      let filteredOddsData = [];
      if (Array.isArray(oddsBetData)) {
        oddsBetData.forEach((oddsData) => {
          filteredOddsData.push({
            userInfo: oddsData?.userInfo,
            description: oddsData?.teamName,
            selection: oddsData?.oddsType,
            selectionId: oddsData?.selectionId,
            stack: oddsData?.amount,
            odds: oddsData?.odds,
            Type: "Match Odds",
            createdAt: oddsData?.createdAt,
            profit: oddsData?.profit,
            loss: oddsData?.loss,
            type: oddsData?.type,
            isDeclare: oddsData?.isDeclare,
            ip: oddsData?.ip,
            run: "",
            oddsType: oddsData?.oddsType,
            positionInfo: oddsData?.positionInfo,
          });
        });
      }
      setUserBetHistory([ 
        ...filteredCasinoData,
        ...filteredFancyData,
        ...filteredOddsData,
      ]);
    }
  }, [betList]);

  console.log(userBetHistory,"userBetHistory")

 
  useEffect(() => {
    const reqData = {
      fromDate: dateRange.startDate,
      toDate: dateRange.endDate,
      
      fancyBet: true,
      oddsBet: true,
      casinoBet: true,
      isDeleted: false,
     
    };
    dispatch(getBetListfunc(reqData))
  },[dateRange])

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
      <div className="w-full px-2 py-2 mt-1 hide-scrollbar overflow-auto">
<table className="w-full">
    <thead className="bg-transparent whitespace-nowrap text-white text-center backdrop-blur-sm text-[14px] w-full" >
        <tr>
            <th> Type</th>
            <th>oddsType</th>
            <th>odds</th>
            <th>profit</th>
            <th>loss</th>      
            <th>selection</th>
            <th>stack</th> 
            <th>Remark</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody className="bg-white/5 whitespace-nowrap backdrop-blur-sm text-white text-center w-full text-[14px]">
        {userBetHistory?.map((item, index) => (
            <tr key={index}>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.Type || '-'}</td>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.oddsType || '-'}</td>                
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.odds || '-'}</td>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.profit || '-'}</td>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.loss || '-'}</td>      
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.selection || '-'}</td>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.stack}</td> 
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.remark || '-'}</td>
                <td className="px-6 py-2 whitespace-nowrap border-b">{new Date(item.createdAt).toLocaleString()}</td>
            </tr>
        ))}
    </tbody>
</table>

      </div>  
    </div>
  )
}

export default History
