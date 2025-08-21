import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdPhoneAndroid } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { register } from "../../redux/reducers/auth.reducer";
import { useDispatch } from "react-redux";
import { senOtp } from "../../redux/reducers/user_reducer";
const SignUp = () => {
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
    if (!username && !password) {
      setErrors({
        username: username ? "" : "Please enter  number",
        password: password ? "" : "Please enter password",
      });
      return;
    }
    if (username.length < 10 && !password) {
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
    // if (!number) {
    //   setErrors({
    //     number: number ? "" : "Please enter  number",
    //   });
    //   return;
    // }
    if (!password) {
      setErrors({
        password: password ? "" : "Please enter  password",
      });
      return;
    }
    // if (!otp && clientdomainSetting?.isSignUpOtp) {
    //   setErrors({
    //     otp: otp ? "" : "Please enter  otp",
    //   });
    //   return;
    // }

    const data = {
      username: username,
      // mobileNo: number,
      // otp: otp,
      password: password,
      referralCode: referralCode,
      isClient: true,
      host: window.location.origin,
    };

    dispatch(register(data)).then((res) => {
      if (!res.error) {
        navigate("/dashboard");
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
        <span className="text-white text-[19px] font-semibold">register</span>
      </div>
      <div className="flex items-center gap-2 mt-7  justify-center  rounded-[12px] bg-[#261C1C]">
        <MdPhoneAndroid
          className="text-[#8A8888] bg-[#261C1C]  ml-4"
          size={28}
        />
        <input
          placeholder="Please Enter User Name"
          type="text"
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {errors.username && (
        <span className="text-red-500 text-[12px] mt-1 ml-4">
          {errors.username}
        </span>
      )}

      {/* <div className="flex items-center gap-2 mt-7  justify-center  rounded-[12px] bg-[#261C1C]">
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
          onChange={(e) => setNumber(e.target.value)}
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

      {clientdomainSetting?.isSignUpOtp && <div className="flex items-center gap-2 mt-7  justify-center  rounded-[12px] bg-[#261C1C]">
        <MdPhoneAndroid
          className="text-[#8A8888] bg-[#261C1C]  ml-4"
          size={28}
        />
        <input
          placeholder="Please Enter OTP"
          type="number"
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4 text-white"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>}
      {errors.otp && (
        <span className="text-red-500 text-[12px] mt-1 ml-4">{errors.otp}</span>
      )} */}

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
        <span className="text-red-500 text-[12px] mt-1 ml-4">
          {errors.password}
        </span>
      )}

      <div className="flex items-center gap-2 mt-6  justify-center rounded-[12px] bg-[#261C1C]">
        <IoIosLock className="text-[#8A8888] bg-[#261C1C] ml-4" size={27} />
        <input
          disabled
          placeholder="Referral Code"
          type="text"
          className="w-full text-[15px] h-[44px]  rounded-r-[12px] bg-[#261C1C]  px-4  text-white"
          value={referralCode}
        />
      </div>
      <div className="flex items-center  gap-2 my-6">
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="w-4 h-4 accent-green-500 rounded-full cursor-pointer"
        />
        <label
          htmlFor="terms"
          className="text-white text-[14px] cursor-pointer"
        >
          <span className="text-[#8A8888] text-[15px]">
            I have agree to the{" "}
          </span>
          <span className="text-white text-[15px]">Use Privacy Agreement</span>
        </label>
      </div>

      <button
        onClick={() => submitHandler()}
        disabled={!isChecked}
        className={`w-full uppercase mt-1 ${
          isChecked
            ? "bg-gradient-to-t from-[#ec1809] to-[#c45f5f]"
            : "bg-[#8A8888] "
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

export default SignUp;
