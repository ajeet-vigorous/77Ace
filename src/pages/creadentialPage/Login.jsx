import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdPhoneAndroid } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth.reducer";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    if (!username && !password) {
      setErrors({
        username: username ? "" : "Please enter  number",
        password: password ? "" : "Please enter password",
      });
      return;
    }
     if(username.length < 10 && !password){
        setErrors({
          username: "Please enter  the correct mobile phone format",
          password: "Please enter password",
        });
        return;
      }
      if (!username || !password) {
        setErrors({
          username: username ? "" : "Please enter  number",
          password: password ? "" : "Please enter password",
        });
        return;
      }

       const data = {
        username: username,
        password: password,
        isClient: true,
        host: window.location.origin
      };

  
   dispatch(login({ username: username, password: password })).then((res)=>{
    if(!res.error){
      navigate('/dashboard');
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
        <span className="text-white text-[19px] font-semibold">sign in</span>
      </div>
    
      <div className="flex items-center gap-2 mt-7  justify-center  rounded-[12px] bg-[#261C1C]">
        <MdPhoneAndroid
          className="text-[#8A8888] bg-[#261C1C]  ml-4"
          size={28}
        />
        <input
          placeholder="Please Enter your account or phone number"
         type="tel"
          maxLength={10}
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
      </div>
      {errors.username && (
          <span className="text-red-500 text-[12px] mt-1 ml-4">{errors.username}</span>
        )}
      <div className="flex items-center gap-2 mt-6  justify-center rounded-[12px] bg-[#261C1C]">
        <IoIosLock className="text-[#8A8888] bg-[#261C1C] ml-4" size={27} />
        <input
          placeholder="Please Enter your password"
          type={showPassword ? "text" : "password"}
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4  text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FaRegEye
          onClick={() => setShowPassword(!showPassword)}
          className="text-white bg-[#261C1C] pl-2 cursor-pointer mr-4"
          size={25}
        />
      </div>
      {errors.password && (
          <span className="text-red-500 text-[12px] mt-1 ml-4">{errors.password}</span>
        )}
      <div>
        <div className="text-right text-[15px] my-5 underline text-red-500">
          Forget Password
        </div>
      </div>

      <button onClick={submitHandler} className="w-full uppercase mt-1 bg-gradient-to-t from-[#ec1809] to-[#c45f5f] text-white text-[16px] font-semibold rounded-[5px] py-2">
        Confirm
      </button>

      <button onClick={()=>{navigate('/signup')}} className="w-full uppercase mt-4 bg-[#331212] text-[#c5352b] text-[16px] font-semibold rounded-[5px] py-2">
        Not a member? Create an account
      </button>
      <div className="flex items-center justify-center mt-10">
      <img src="/loginsignup/login-bg.webp" className="w-[310px] h-[200px]" alt="" />
      </div>
     
    </div>
  );
};

export default Login;
