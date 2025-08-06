import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const AppHeader = ({toggleSidebar,toggleSubHeader}) => {
  const navigate = useNavigate()

  const handleSidebarToggle = () => {
    toggleSidebar();
  }

  const handleSubHeaderToggle = () => {
    toggleSubHeader();
  }


  return (
    <>

      <div className="grid grid-cols-2 h-full justify-center items-center " >
        <div className="flex gap-2 h-full justify-start  items-center !pl-[20px]">
          <img src="/header/btn.webp" onClick={handleSidebarToggle} alt="" className="w-[35px] h-[37px]"/>
          <img src="/header/logo.webp" alt="" className="w-[105.5px] h-[32px]" />

        </div>
        <div className="flex gap-2 h-full justify-end  items-center !pr-[12px]">
          <div className="bg-[#611A1C] w-[170px] flex justify-between py-[2.5px] px-[3px] items-center h-[41px] rounded-xl">
            <div className="flex justify-center items-center gap-0.5 pl-1 text-white"><MdCurrencyRupee size={13}/> 0</div>
            <div className="flex gap-2 h-full justify-around  items-center">
            <img src="/header/reset.webp" alt=""  className="w-[20px] h-[20px]"/>
            <img onClick={()=>{navigate('/addcash')}} src="/header/deposit.webp" alt=""  className="w-[35px] h-full"/>
            </div>           
          </div>

          <div onClick={handleSubHeaderToggle} className="rounded-full w-[45px] h-[45px]" style={{backgroundImage: "url('/header/1-1.webp')",backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat"}}>
            
          </div>

        </div>
       
 
      </div >
    </>
  );
};

export default AppHeader;