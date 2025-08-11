import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIntCasinoCategoryList from "../../hook/useIntCasinoCategoryList";



const menuItems = [
 
];

const SubHeader = () => {
  const navigate = useNavigate();
  const [seletedTab , setSelectedTab] = useState('1');



  return (
    <>
      <div className="grid grid-cols-5 h-full  relative ">
        <div  className={`flex flex-col cursor-pointer  h-full gap-1 justify-center items-center ${seletedTab !== '1' ? 'opacity-20' : ''}`} onClick={()=>{setSelectedTab('1');navigate('/')}}>
         {seletedTab === '1' && <img className="w-[45px] absolute top-2  h-[40px]" src={'/navigationtab/foot-bg.webp' } alt="" onClick={()=>setSelectedTab('1')}/>}
          <img src="/navigationtab/home.svg" alt="" onClick={()=>setSelectedTab('1')}/>
          <p className="text-white text-[13px]" >Home</p>
        </div>

        <div  className={`flex flex-col cursor-pointer h-full gap-1 justify-center items-center ${seletedTab !== '2' ? 'opacity-20' : ''}`} onClick={()=>{setSelectedTab('2');navigate('/promo',{ state: { defaultTab: 'promo' } })}}>
         {seletedTab === '2' && <img className="w-[45px] absolute top-2  h-[40px]" src={'/navigationtab/foot-bg.webp' } alt="" onClick={()=>setSelectedTab('2')}/>}
          <img src="/navigationtab/promo.svg" alt="" onClick={()=>{setSelectedTab('2');navigate('/promo',{ state: { defaultTab: 'promo' } })}}/>
          <p className="text-white text-[13px]" >Promo</p>
        </div>

        <div className="flex flex-col cursor-pointer   h-full gap-2 justify-center items-center" onClick={()=>setSelectedTab('3')}>
        <div className="w-[75px] h-[75px] absolute -top-8 p-2 rounded-full bg-black/60 backdrop-blur-md">
          <img src="/navigationtab/centerFloatButton.webp" alt="" onClick={()=>setSelectedTab('3')}/>
          <p className="text-white text-center mt-1.5 text-[13px]" >Wallet</p>
          </div>        
         
         
        </div>

        <div className={`flex flex-col cursor-pointer h-full gap-1 justify-center items-center ${seletedTab !== '4' ? 'opacity-20' : ''}`} onClick={()=>{setSelectedTab('4');navigate('/earn')}}>
         {seletedTab === '4' && <img className="w-[45px] absolute top-2  h-[40px]" src={'/navigationtab/foot-bg.webp' } alt="" onClick={()=>{setSelectedTab('4');navigate('/earn')}}/>}
          <img src="/navigationtab/earn.svg" alt="" onClick={()=>{setSelectedTab('4');navigate('/earn')}}/>
          <p className="text-white text-[13px]" >Earn </p>
        </div>
        <div className={`flex flex-col cursor-pointer h-full gap-1 justify-center items-center ${seletedTab !== '5' ? 'opacity-20' : ''}`} onClick={()=>{setSelectedTab('5');navigate('/myaccount')}}>
         {seletedTab === '5' && <img className="w-[45px] absolute top-2  h-[40px]" src={'/navigationtab/foot-bg.webp' } alt="" onClick={()=>{setSelectedTab('5');navigate('/myaccount')}}/>}
          <img src="/navigationtab/account.svg" alt="" onClick={()=>{setSelectedTab('5');navigate('/myaccount')}}/>
          <p className="text-white text-[13px]" >Me </p>
        </div>
        

        
     
      </div>
    </>
  );
};

export default SubHeader;