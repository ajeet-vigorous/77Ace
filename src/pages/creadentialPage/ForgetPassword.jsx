import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdPhoneAndroid } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { register } from "../../redux/reducers/auth.reducer";
import { useDispatch } from "react-redux";
import { ForForgetPassword, senOtp } from "../../redux/reducers/user_reducer";
const ForgetPassword = () => {
  const clientdomainSetting = JSON.parse(
    localStorage.getItem("clientdomainSetting")
  );

  const { referralCode } = useParams();

  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    number: "",
    otp: "",
  });
  const handleVerify = () => {
    const data = {
      phone: number,
    };
    dispatch(senOtp(data)).then((res) => {
      if (!res.error) {
        // navigate('/verify');
      }
    });
  };
  const submitHandler = () => {
    if (!number && !password && !otp) {
      setErrors({
        number: number ? "" : "Please enter  number",
        password: password ? "" : "Please enter password",
        otp: otp ? "" : "Please enter otp",
      });
      return;
    }
    if (number.length < 10 && !password) {
      setErrors({
        number: "Please enter  the correct mobile phone format",
        password: "Please enter password",
      });
      return;
    }
    if (!number || !password) {
      setErrors({
        number: number ? "" : "Please enter  number",
        password: password ? "" : "Please enter password",
      });

      return;
    }
    
    
    if (!otp) {
      setErrors({
        otp: otp ? "" : "Please enter  otp",
      });
      return;
    }

    const data = {
     
      mobile: number,
      otp: otp,
      password: password,
      
    //   isClient: true,
    //   host: window.location.origin,
    };

    dispatch(ForForgetPassword(data)).then((res) => {
      if (!res.error) {
        navigate("/login");
      }
    });
  };
  return (
    <div className="w-ful p-4 ">
      <div className="flex px-3 rounded-[5px] items-center justify-start gap-40">
        <img
          onClick={() => navigate(-1)}
          className="cursor-pointer w-[35px] h-[35px]"
          src="/backbutton/back-button.webp"
          alt=""
        />
        <span className="text-white text-[19px] font-semibold">Forget Password</span>
      </div>
      

      <div className="flex items-center gap-2 mt-7  justify-center  rounded-[12px] bg-[#261C1C]">
        <MdPhoneAndroid
          className="text-[#8A8888] bg-[#261C1C]  ml-4"
          size={28}
        />
        <input
          placeholder="Please Enter Number"
          type="tel"
          maxLength={10}
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4 text-white"
          value={number}
          onChange={(e) => {setNumber(e.target.value);setErrors({...errors,number:""})}}
        />
        {clientdomainSetting?.isSignUpOtp ? (
          <button
            className="bg-[#ec1809] p-2 rounded-r-md text-white"
            onClick={handleVerify}
          >
            Verify
          </button>
        ) : (
          ""
        )}
      </div>
      {errors.number && (
        <span className="text-red-500 text-[12px] mt-1 ml-4">
          {errors.number}
        </span>
      )}

      <div className="flex items-center gap-2 mt-7  justify-center  rounded-[12px] bg-[#261C1C]">
        <MdPhoneAndroid
          className="text-[#8A8888] bg-[#261C1C]  ml-4"
          size={28}
        />
        <input
          placeholder="Please Enter OTP"
          type="number"
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4 text-white"
          value={otp}
          onChange={(e) => {setOtp(e.target.value);setErrors({...errors,otp:""})}}
        />
      </div>
      {errors.otp && (
        <span className="text-red-500 text-[12px] mt-1 ml-4">{errors.otp}</span>
      )}

      <div className="flex items-center gap-2 mt-6  justify-center rounded-[12px] bg-[#261C1C]">
        <IoIosLock className="text-[#8A8888] bg-[#261C1C] ml-4" size={27} />
        <input
          placeholder="Please Enter New Password"
          type={showPassword ? "text" : "password"}
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4  text-white"
          value={password}
          onChange={(e) => {setPassword(e.target.value);setErrors({...errors,password:""})}}
        />
        <FaRegEye
          onClick={() => setShowPassword(!showPassword)}
          className="text-white bg-[#261C1C] pl-2 cursor-pointer mr-4"
          size={25}
        />
      </div>
      {errors.password && (
        <span className="text-red-500 text-[12px] mt-1 ml-4">
          {errors.password}
        </span>
      )}

  

      <button
        onClick={() => submitHandler()}
        
        className={`w-full uppercase mt-4 ${
          "bg-gradient-to-t from-[#ec1809] to-[#c45f5f]"
            
        } text-white text-[16px] font-semibold rounded-[5px] py-2`}
      >
        Confirm
      </button>

      <div className="flex items-center justify-center mt-10">
        <img
          src="/loginsignup/login-bg.webp"
          className="w-[310px] h-[200px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
