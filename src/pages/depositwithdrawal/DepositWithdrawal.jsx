import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDepositWithdrawList } from '../../redux/reducers/user_reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const DepositWithdrawal = () => {
    const navigate = useNavigate();
    const [withdrawDepositTab, setwithdrawDepositTab] = useState('withdraw');
    const {depositWithdrawList} = useSelector((state) => state.user);
    
    
    const [fileredData,setFileredData] = useState({
        deposit:[],
        withdraw:[]
    });

    useEffect(() => {
        const filterDepositList = depositWithdrawList?.filter((item) => item.reqType === 'deposit');
        const filterWithdrawList = depositWithdrawList?.filter((item) => item.reqType === 'withdraw');
        setFileredData({
            deposit:filterDepositList,
            withdraw:filterWithdrawList
        })
    },[depositWithdrawList]);

  
      const [activeTab, setActiveTab] = useState("1 Day");
      const tabs = ["1 Day", "7 Day", "30 Day"];
    const dispatch = useDispatch();
    

    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null })


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
        if (!dateRange?.startDate || !dateRange?.endDate){
            return
        }
        const reqData = {
            fromDate: dateRange?.startDate,
            toDate: dateRange?.endDate,
            pageNo: '',
            size: '',
            status: '',
          };
          dispatch(getDepositWithdrawList(reqData));
    }, [withdrawDepositTab,dateRange]);
  

  
   
 
  return (
    <div className='w-full h-full overflow-auto'>
    <div className="w-full p-6 pt-6 pb-2 ">
          <div className='flex px-3 rounded-[5px] items-center justify-start gap-40'>
       <img onClick={() => navigate(-1)} className='cursor-pointer w-[35px] h-[35px]' src="/backbutton/back-button.webp" alt="" />    
       <span className='text-white text-[19px] font-semibold'>History</span>    
       </div>
       <div className='grid  mt-6 bg-white/5 backdrop-blur-sm h-[56px] grid-cols-2 items-center justify-center ' style={{boxShadow:'0.2px -0.2px  white'}}>
        
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setwithdrawDepositTab('withdraw')}}>
       
      <div   className='flex flex-col  relative h-full  items-center justify-center '>
      <span className='text-white p-2 text-[16px] font-semibold'>Withdraw</span> 
      {withdrawDepositTab === 'withdraw' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>

       
            
        </div>
        <div className='flex items-center  h-full justify-center cursor-pointer' onClick={() => {setwithdrawDepositTab('deposit')}}>
       
      <div  className='flex flex-col  relative h-full  items-center justify-center '>
      <span className={`text-white p-2 text-[16px] font-semibold`}>Deposit</span> 
      {withdrawDepositTab == 'deposit' && <div className='w-full h-[2px] bg-[#F44336] shadow-[0px_-20px_40px_7px_#F44336] absolute bottom-1'></div>}
      </div>
       
            
        </div>

    
        
       </div>

    </div>

    <div className="flex justify-between px-10 border-b border-gray-600 ">
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
      
      <div className="w-full px-1 py-2 overflow-auto">
<table className="w-full">
    <thead className="bg-transparent whitespace-nowrap text-white text-center backdrop-blur-sm text-[14px] w-full" >
        <tr>
            <th> Amount</th>
            <th>Utr Number</th>       
            <th>Remark</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody className="bg-white/5 whitespace-nowrap backdrop-blur-sm text-white text-center w-full text-[14px]">
        {fileredData[withdrawDepositTab]?.map((item, index) => (
            <tr key={index}>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.amount}</td>
                <td className="px-6 py-2 whitespace-nowrap border-b">{item.utrNo}</td>                
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

export default DepositWithdrawal