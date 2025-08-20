import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { intGrupCsnoList } from "../../redux/reducers/casino.reducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserBalance } from "../../redux/reducers/user_reducer";

const AppHeader = ({toggleSidebar,toggleSubHeader}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const clientBalance = localStorage.getItem("clientBalance") ? localStorage.getItem("clientBalance") : 0;
  console.log(clientBalance,"clientBalance");
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 3000);
   dispatch(getUserBalance())

  }

  console.log(rotate,"rotate");
const dispatch = useDispatch();
 

  const handleSidebarToggle = () => {
    toggleSidebar();
  }

  const handleSubHeaderToggle = () => {
    toggleSubHeader();
  }

  useEffect(()=>{
    const data = {
      "categoriesList": true,
      "providerList": true,
      "lobbygames": true,
      "trendingGames": true,
      "popularGames": true,
      "liveGames": true
    }
    
      dispatch(intGrupCsnoList(data))
   
  },[])


  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-[0.3fr_1fr] h-full justify-center items-center " >
        <div className="flex gap-2 h-full justify-start  items-center !pl-[20px]">
          <img src="/header/btn.webp" onClick={handleSidebarToggle} alt="" className="w-[35px] h-[37px]"/>
          <img onClick={()=>{ window.open('/', '_blank');}} src="/header/logo.webp" alt="" className="w-[105.5px] h-[32px] sm:block hidden" />
          <img src="/header/logo-low.webp" alt="" className="!min-w-[50px] h-[32px] sm:hidden block" />
        </div>
        {token && <div className="flex gap-2 h-full justify-end  items-center !pr-[12px]">
          <div className="bg-[#611A1C] w-[170px] flex justify-between py-[2.5px] px-[3px] items-center h-[41px] rounded-xl">
            <div className="flex justify-center items-center gap-0.5 pl-1 text-white"><MdCurrencyRupee size={13}/> {clientBalance ? Number(clientBalance).toFixed(2) : "0.00"}</div>
            <div className="flex gap-2 h-full justify-around  items-center">
            <img src="/header/reset.webp" alt="" onClick={()=>{handleRotate()}}    className={`w-[20px] h-[20px] transition-transform duration-150 ${rotate ? 'rotate-180' : 'rotate-0'}`}/>
            <img onClick={()=>{navigate('/addcash')}} src="/header/deposit.webp" alt=""  className="w-[35px] h-full"/>
            </div>           
          </div>

          <div onClick={handleSubHeaderToggle} className="rounded-full w-[45px] h-[45px]" style={{backgroundImage: "url('/header/1-1.webp')",backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
            
          </div>

        </div>}

        {!token && <div className="flex gap-3 h-full justify-end mr-2  items-center ">
          <button onClick={()=>{navigate('/login')}} className="px-6 py-[5px] rounded-[4px] bg-[#AE372B] text-white " >
            Login
            
          </button>
          <button onClick={()=>{navigate('/signup')}} className="px-6 py-[5px] rounded-[4px] bg-transparent text-white border border-gray-500 " >
            Register
          </button>
            
          </div>}
       
 
      </div >
    </>
  );
};

export default AppHeader;