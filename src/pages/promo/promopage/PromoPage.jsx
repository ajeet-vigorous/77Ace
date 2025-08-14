import React from 'react'

const PromoPage = ({setScreen}) => {
    const promoJson =[
        {
            id:1,
            title:'Promo',
            description:'Spin Lucky Wheel',
            image:'/Promo/17440975425.webp',
            screen:"luckywheel"
        },
        {
            id:2,
            title:'Promo',
            description:'Slot machine weekly loss rebate',
            image:'/Promo/17327146465.webp',
            screen:"slotmachine"
        },
        {
            id:3,
            title:'Promo',
            description:'Vip Rewards',
            image:'/slider/1722931231banner-3.webp',
            screen:"viprewards"
        },
        {
            id:4,
            title:'Promo',
            description:'Earn Money',
            image:'/slider/1722931246banner-5.webp',
            screen:"earnmoney"
        },
        {
            id:5,
            title:'Promo',
            description:'Recharge Extra 5%',
            image:'/Promo/17237286103.webp',
            screen:"rechargeextra"
        },
    ]
    

  return (
    <div className='w-full h-screen overflow-y-auto hide-scrollbar'>
    <div className='flex flex-col rounded-[10px] mt-3 gap-4 mb-52'>
    {
            promoJson.map((item)=>{
                return(
                    <div onClick={()=>setScreen(item.screen)}  className='w-full  rounded-[10px] relative h-[140px] sm:h-[200px] ' key={item.id}>
                        <img src={item.image} className='w-full h-full rounded-[10px] ' alt="" />
                     
                       <div className='text-white text-[18px] p-2 pl-6 bg-[#2F2929] w-full absolute bottom-0 rounded-bl-[10px] rounded-br-[10px] font-semibold'>{item.description}</div>
                      
                    </div>
                )
            })
    }
    </div>
    </div>
  )
}

export default PromoPage