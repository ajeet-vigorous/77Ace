import React, { useEffect, useState } from "react";
import { addPaymentBanks } from "../../config/global";
import { IoIosArrowForward } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  depositeRequest,
  getBankDetailsByUserId,
} from "../../redux/reducers/user_reducer";

const PaymentScreen = ({
  paymentScreen,
  setPaymentScreen,
  activeChannel,
  setActiveChannel,
  amount,
  setAmount,
  amounts,
  addcashJson,
}) => {
  const user = useSelector((state) => state.user);
  const [scannerUrl, setScannerUrl] = useState();
  const [utrNo, setUtrNo] = useState();
  const [error, setError] = useState({ amountError: "", utrNoError: "" });
  const domainSetting = JSON.parse(localStorage.getItem("clientdomainSetting"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBankDetailsByUserId());
  }, []);

  const handleDepositeRequest = () => {
    if (!amount) {
      setError({ amountError: "Please enter valid amount", utrNoError: "" });
      return;
    }

    if (!utrNo) {
      setError({ utrNoError: "Please enter  UTR No", amountError: "" });
      return;
    }

    if (utrNo.length < 6) {
      setError({ utrNoError: "Please enter valid UTR No", amountError: "" });
      return;
    }

    const data = {
      amount: amount,
      utrNo: utrNo,
    };
    dispatch(depositeRequest(data));
  };

  return (
    <div className="">
      {" "}
      {paymentScreen === "addcash" && (
        <>
          <div className=" text-[16px] text-[#8A8888]  my-7">
            Choose a payment method
          </div>
          <div className="grid grid-rows-3 gap-4 bg-white/10 py-6 px-3 rounded-lg backdrop-blur-sm">
            {/* {
           addcashJson.map((item,index)=>{
               return(
                   <div onClick={() => {setPaymentScreen('addBalance');setActiveChannel(item.name)}} key={index} className='flex rounded-sm cursor-pointer  bg-white/5 backdrop-blur-sm items-center justify-start'> 
                       <div className='flex items-center  justify-center p-2'>
                      <div className='border-r-[1px] border-[#8A8888] pr-2'> <img className='w-[60px] h-[40px]' src={item.img} alt="" /></div>
                       <div className='flex flex-col ml-2  '>
                       <span className='text-white text-[12px]'>{item.name}</span>                        
                       <span className='text-[#8A8888] text-[10px]'>ETA {item.eta} min</span>
                       </div>
                       </div>
                       <div className='flex items-center flex-1 h-full justify-end gap-16 pr-5'>
                           <div className='text-white flex items-center text-[12px]'>{item.range} <MdCurrencyRupee size={10}/></div>
                           <IoIosArrowForward  className='text-[#8A8888] w-[16px] h-[16px]'/>
                           
                       </div>
                   </div>
               )
           })
       } */}

                    <div
                      onClick={() => {
                        setPaymentScreen("addBalance");
                        setActiveChannel("Bank");
                        setScannerUrl('');
                      }}
                      
                      className="flex rounded-sm cursor-pointer  bg-white/5 backdrop-blur-sm items-center justify-start"
                    >
                      <div className="flex items-center  justify-center p-2">
                        <div className="border-r-[1px] border-[#8A8888] pr-2">
                          {" "}
                          <img
                            className="w-[60px] h-[40px]"
                            src="/paymentimg/bank-icon-png_239804.jpg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col ml-2  ">
                          <span className="text-white text-[12px]">
                            Bank
                          </span>
                          <span className="text-[#8A8888] text-[10px]">
                            ETA 2-3 min
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center flex-1 h-full justify-end gap-16 pr-5">
                        <div className="text-white flex items-center text-[12px]">
                       
                        </div>
                        <IoIosArrowForward className="text-[#8A8888] w-[16px] h-[16px]" />
                      </div>
                    </div>

            {Object.keys(domainSetting?.upi)?.map((items) => {
              const bank = addPaymentBanks?.find((item) => item.name === items);
              return addcashJson
                ?.filter((item) => item.name === items)
                ?.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setPaymentScreen("addBalance");
                        setActiveChannel(item.name);
                        setScannerUrl(items);
                      }}
                      key={index}
                      className="flex rounded-sm cursor-pointer  bg-white/5 backdrop-blur-sm items-center justify-start"
                    >
                      <div className="flex items-center  justify-center p-2">
                        <div className="border-r-[1px] border-[#8A8888] pr-2">
                          {" "}
                          <img
                            className="w-[60px] h-[40px]"
                            src={item.img}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col ml-2  ">
                          <span className="text-white text-[12px]">
                            {item.name}
                          </span>
                          <span className="text-[#8A8888] text-[10px]">
                            ETA {item.eta} min
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center flex-1 h-full justify-end gap-16 pr-5">
                        <div className="text-white flex items-center text-[12px]">
                         
                        </div>
                        <IoIosArrowForward className="text-[#8A8888] w-[16px] h-[16px]" />
                      </div>
                    </div>
                  );
                });
            })}
          </div>{" "}
        </>
      )}
      {paymentScreen === "addcash" && (
        <div className="grid grid-cols-4 mt-8">
          {Object.keys(domainSetting?.upi)?.map((items) => {
            return addPaymentBanks
              ?.filter((item) => item.name === items)
              ?.map((data) => {
                return (
                  <div className="">
                    <img className="w-[90px] h-[40px]" src={data.img} alt="" />
                  </div>
                );
              });
          })}
        </div>
      )}
      {paymentScreen === "addBalance" && (
        <>
          <div className="flex justify-between my-5">
            <span className="text-[17px] font-semibold text-[#8A8888]">
              Payment Method
            </span>
            <div
              onClick={() => {
                setPaymentScreen("addcash");
              }}
              className="text-[16px] flex items-center gap-2 justify-center text-white"
            >
              {activeChannel} <FaSortDown />
            </div>
          </div>
          {scannerUrl && <div className="flex items-center justify-center">
            <img
              src={domainSetting?.upi?.[scannerUrl]?.image}
              className="w-[200px] h-[200px]"
              alt={""}
            />
          </div>}

          <span className="text-[14px] font-semibold text-[#8A8888]">
            Select Amount
          </span>

          <div className="grid grid-cols-3 gap-2 items-center my-4 justify-center">
            {amounts.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className={`flex items-center justify-center rounded-[5px] backdrop-blur-sm 
                   ${
                     amount === value
                       ? "bg-[#B81212] text-white"
                       : "bg-white/5 text-white"
                   }`}
              >
                <span className="text-[16px] px-6 py-4">{value}</span>
              </button>
            ))}
          </div>

          <span className="text-[14px] flex justify-start items-center font-semibold text-[#8A8888]">
            Amount (100-50000 <MdCurrencyRupee size={15} />)
          </span>
          <div className="flex items-center gap-2 mt-2  justify-center rounded-[5px] bg-[#2E2929]">
            <MdCurrencyRupee className="text-[#8A8888] pl-2" size={30} />
            <input
              value={amount}
              placeholder="Amount"
              onChange={(e) => {
                setAmount(e.target.value);
                setError({ amountError: "", utrNoError: "" });
              }}
              type="number"
              className="w-full h-[44px]  bg-[#2E2929]  px-4 text-[16px] text-white"
            />
          </div>
          <span className="text-red-500">{error.amountError}</span>
          <div className="flex items-center gap-2 mt-2  justify-center rounded-[5px] bg-[#2E2929]">
            <input
              value={utrNo}
              placeholder="UTR No"
              onChange={(e) => {
                setUtrNo(e.target.value);
                setError({ amountError: "", utrNoError: "" });
              }}
              type="number"
              className="w-full h-[44px]  bg-[#2E2929]  px-4 text-[16px] text-white"
            />
          </div>
          <span className="text-red-500">{error.utrNoError}</span>

          <button
            onClick={() => handleDepositeRequest()}
            className="w-full  mt-24 bg-gradient-to-t from-[#B81212] to-[#f56e65] text-white text-[16px] font-semibold rounded-[5px] py-2"
          >
            S E N D
          </button>

          <hr className="w-full my-8 border-[#8A8888]" />

          <div className="grid grid-cols-4 ">
            {user?.bankDetails?.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-center">
                  <img className="" src={item.img} alt="" />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentScreen;
