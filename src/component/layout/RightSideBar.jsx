import {  useNavigate } from "react-router-dom";
import { rightSideBarJson } from "../../config/global";


const RightSideBar = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }

  return (
    <div className="flex p-5 gap-4 w-full flex-col h-full">
      <div className="flex items-center w-full justify-start  gap-2 rounded-md ">
      
          <img src='/header/1-1.webp' alt="" className="" height={50} width={50} />
          <div className="flex items-start justify-start flex-col  ">
          <div className="text-white  text-[17px] break-words w-[120px]  font-semibold"> 77ace_8000982866</div>
          <div className=" text-[13px] font-semibold text-[#999797]">ID:8000982866</div>
          </div>
       
      </div>
      {rightSideBarJson.map((item,index)=>{
        return(
         
            <div key={index} onClick={()=>{handleNavigation(item.path)}} className="flex items-center justify-start  gap-4 rounded-md bg-[#2E2929] h-[42px]">
                <div className="flex w-full items-center justify-start   gap-3  cursor-pointer  h-[20px]">
         <img src={item.icon} alt="" className="ml-4" height={20} width={20} />
              <span className="text-white text-[15px] font-semibold">{item.name}</span>
              </div>
            </div>
          
        )
      })}

        <div className="flex items-center justify-center  gap-5 rounded-md bg-[#2E2929] h-[40px]">
                <div className="flex w-full items-center justify-center   gap-3  cursor-pointer  h-[20px]">
            
              <span className="text-white text-[15px] font-semibold">Logout</span>
              </div>
            </div>

    
        

    </div>
  );
};

export default RightSideBar;
