import React, { useEffect, useRef, useState } from "react";
import { addPaymentBanks } from "../../config/global";
import { IoIosArrowForward } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  depositeRequest,
  getBankDetailsByUserId,
  uploadScreenShot,
} from "../../redux/reducers/user_reducer";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const {screenShotImg} = useSelector((state) => state.user);
  const handleRemoveFile = () => {
    setSelectedFile(null);
  
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  
   
    setError({ ...error, screenShotImgError: "" });
  };


 useEffect(() => {
    setSelectedFile('');
    setUtrNo("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setAmount("");
    setError({ amountError: "", utrNoError: "", screenShotImgError: "" });
 }, [paymentScreen]);

  const handleFileChange = (e) => {
    setError({ ...error, screenShotImgError: "" });
   
   
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);     
      try {
        dispatch(uploadScreenShot(formData));
        const toastId = toast.success("File uploaded successfully");
        setTimeout(() => toast.dismiss(toastId), 1000);
       
        setSelectedFile(file);
        
        
      } catch (error) {
        const toastId = toast.error("Error uploading file:");
        setTimeout(() => toast.dismiss(toastId), 1000);
        console.error("Error uploading file:", error);
      }
    }    
    else{
      const formData = new FormData();
      formData.append("image", file);  
      dispatch(uploadScreenShot(formData));
      setSelectedFile(null);
      
      
    }
  };
  const [utrNo, setUtrNo] = useState();
  const [error, setError] = useState({ amountError: "", utrNoError: "", screenShotImgError: "" });
  const domainSetting = JSON.parse(localStorage.getItem("clientdomainSetting"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBankDetailsByUserId());
  }, []);

  const handleDepositeRequest = () => {
    if (!screenShotImg||fileInputRef.current.value === "") {
      setError({ screenShotImgError: "Please upload screen shot", amountError: "" });
      return;
    }
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
      screenShotImg: screenShotImg,
    };
    dispatch(depositeRequest(data)).then((res)=>{
      if(res){
        setSelectedFile(null);
        setUtrNo("");
        fileInputRef.current.value = "";
        setAmount("");
        setPaymentScreen("addcash");
      }
      console.log(res);
    });
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

            {domainSetting && Object.keys(domainSetting?.upi)?.map((items) => {
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
          {domainSetting && Object.keys(domainSetting?.upi)?.map((items) => {
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
       {scannerUrl && <div className="flex flex-col">
          <div className="flex text-white items-center justify-between p-2 rounded-[5px] bg-white/5 mt-2 backdrop-blur-sm">
            <span>UPI ID</span>
          {domainSetting?.upi?.[scannerUrl]?.upiId}
          </div>
          <div className="flex text-white items-center justify-between p-2 rounded-[5px] bg-white/5 mt-2 backdrop-blur-sm">
          <span>Mobile No</span>
          {domainSetting?.upi?.[scannerUrl]?.mobNo}
          </div>

        </div>}
        {!scannerUrl && <div className="flex flex-col">
          <div className="flex text-white items-center justify-between p-2 rounded-[5px] bg-white/5 mt-2 backdrop-blur-sm">
            <span>Branch Name</span>
          {domainSetting?.account.branchName
          }
          </div>
          <div className="flex text-white items-center justify-between p-2 rounded-[5px] bg-white/5 mt-2 backdrop-blur-sm">
          <span>Account Holder Name</span>
          {domainSetting?.account.acHolderName}
          </div>
          <div className="flex text-white items-center justify-between p-2 rounded-[5px] bg-white/5 mt-2 backdrop-blur-sm">
          <span>Account No</span>
          {domainSetting?.account.accountNumber}
          </div>
          <div className="flex text-white items-center justify-between p-2 rounded-[5px] bg-white/5 mt-2 backdrop-blur-sm">
          <span>IFSC Code</span>
          {domainSetting?.account.ifscCode}
          </div>
          

        </div>}
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
          <div
                className="flex justify-center items-center border rounded-[11px] mt-3 px-2  w-full py-5"
                style={{ backgroundColor: "rgb(25,28,28)", opacity: 0.9 }}
              >
                <div className="flex flex-col justify-center items-center bg-[#251C1C] mx-1 py-4  rounded-lg w-full h-full">
                  <label
                    className="relative cursor-pointerx border border-dashed border-[rgb(0,8,73)] rounded-lg p-5  w-20 h-18  flex justify-center items-center  "
                    style={{
                      backgroundColor: "rgb(229,231,252)",
                      opacity: 0.9,
                    }}
                  >
                      <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e)=>handleFileChange(e)}
        />
                    <span className="text-4xl text-black">+</span>
                  </label>

                  <span className="m-1 text-sm font-bold text-[#343434]">
                  {selectedFile && (
        <div className="mt-2 flex items-center justify-between text-gray-300 text-sm">
          Selected file: {selectedFile.name}
          <button className="ml-2 cursor-pointer text-red-500 " onClick={()=>handleRemoveFile()}><RxCross2 size={20} />
          </button>
        </div>
      )}
                  </span>
                  {error.screenShotImgError && (
                    <div className="text-red-600 font-bold text-sm mb-1 text-left">
                      {error.screenShotImgError}
                    </div>
                  )}
                </div>
              </div>
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
                const value = e.target.value.slice(0, 16);
                setUtrNo(value);
                setError({ amountError: "", utrNoError: "" });
              }}
              maxLength={16}
              type="number"
              
              className="w-full h-[44px]  bg-[#2E2929]  px-4 text-[16px] text-white"
            />
          </div>
          <span className="text-red-500">{error.utrNoError}</span>
          <div className="p-4">
      {/* Upload Button */}
      {/* <label className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer inline-block">
        Upload File
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e)=>handleFileChange(e)}
        />
      </label> */}

      {/* Show Selected File */}
      {/* {selectedFile && (
        <div className="mt-2 flex items-center justify-between text-gray-300 text-sm">
          Selected file: {selectedFile.name}
          <button className="ml-2 cursor-pointer text-red-500 " onClick={()=>handleRemoveFile()}><RxCross2 size={20} />
          </button>
        </div>
      )}
      <div className="text-red-500">{error.screenShotImgError}</div> */}
    </div>

    
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
