import { all } from "axios"

export const sidebarJson = {
  tabs :[
    {
      name:"Home",
      icon:"/sidebar/home.webp",
      path:"/"
    },
    {
      name:"VIP",
      icon:"/sidebar/vip.webp",
      path:"/vip"
    },
    {
      name:"Earn Money",
      icon:"/sidebar/earn.webp",
      path:"/earn"
    },
    {
      name:"Me",
      icon:"/sidebar/me.webp",
      path:"/myaccount"
    }
  ],
  promo :[
    {
      name:"spin lucky wheel",
      icon:"/sidebar/promo-2.webp",
      path:"/promo"
    },
    {
      name:"Slot machine weekly loss rebate",
      icon:"/sidebar/promo-1.webp",
      path:"/vip"
    },
    
  ]
}


export const rightSideBarJson = [
  {
    name:"My Account",
    icon:"/sidebar/account.svg",
    path:"/myaccount",
    
  },
  {
    name:"Message",
    icon:"/sidebar/Message.svg",
    path:"/vip",
    
  },
  {
    name:"Add Cash",
    icon:"/sidebar/deposit.svg",
    path:"/addcash",
    
  },
  
  {
    name:"Withdraw",
    icon:"/sidebar/withdraw.svg",
    path:"/Withdraw",
    
  },
  {
    name:"service/support",
    icon:"/sidebar/service.svg",
    path:"/service/support",
    
  },
]

export const sliderData = [
  {
    gameName: "Game 1",
    gameImg: "/slider/1722870279banner-1.webp",
    gameLink: "/game-1",
  },
  {
    gameName: "Game 2",
    gameImg: "/slider/1722931225banner-2.webp",
    gameLink: "/game-2",
  },
  {
    gameName: "Game 3",
    gameImg: "/slider/1722931231banner-3.webp",
    gameLink: "/game-3",
  },
  {
    gameName: "Game 4",
    gameImg: "/slider/1722931241banner-4.webp",
    gameLink: "/game-4",
  },
  {
    gameName: "Game 5",
    gameImg: "/slider/1722931246banner-5.webp",
    gameLink: "/game-5",
  },
  {
    gameName: "Game 6",
    gameImg: "/slider/1722931252banner-6.webp",
    gameLink: "/game-6",
  },
  {
    gameName: "Game 7",
    gameImg: "/slider/1722931257banner-7.webp",
    gameLink: "/game-7",
  },
]

export const casinoTab =[
  {
    name:"Hot",
    activeIcon:"/dashboard/fliter-hot.webp",
    inactiveIcon:"/dashboard/fliter-hot-a.webp",
    icon:"/dashboard/casinoImg/hot.webp",
    id:'1',
    casinoName:'trendingGames',
    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]

  },
  {
    name:"All",
    activeIcon:"/dashboard/fliter-all.webp",
    inactiveIcon:"/dashboard/fliter-all-a.webp",
    id:'2',
    icon:"",
    casinoName:'allGames',
    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]

  },
  {
    name:"Live",
    activeIcon:"/dashboard/fliter-ent.webp",
    inactiveIcon:"/dashboard/fliter-ent-a.webp",
    icon:"/dashboard/casinoImg/ent.webp",
    casinoName:'liveGames',
    id:'3',
    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]
  },
  {
    name:"Slot",
    activeIcon:"/dashboard/fliter-slot.webp",
    inactiveIcon:"/dashboard/fliter-slot-a.webp",
    icon:"/dashboard/casinoImg/slot.webp",
    id:'4',
    casinoName:'slotGames',

    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]
  },
  {
    name:"Fish",
    activeIcon:"/dashboard/fliter-fish.webp",
    inactiveIcon:"/dashboard/fliter-fish-a.webp",
    icon:"/dashboard/casinoImg/fish.webp",
    id:'5',
    casinoName:'fishGames',
    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]

  },
  {
    name:"Card",
    activeIcon:"/dashboard/fliter-card.webp",
    inactiveIcon:"/dashboard/fliter-card-a.webp",
    icon:"/dashboard/casinoImg/card.webp",
    id:'6',
    casinoName:'cardGames',
    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]

  },
  {
    name:"Spot",
    activeIcon:"/dashboard/fliter-spot.webp",
    inactiveIcon:"/dashboard/fliter-spot-a.webp",
    icon:"/dashboard/casinoImg/spot.webp",
    id:'7',
    casinoName:'spotGames',
    games:[
      {
        name:"Evolution",
        icon:"",
        orderBy:1,
        img:"/dashboard/casinoImg/1722871052casino-evo.webp"
      },
      {
        name:"Playtech",
        icon:"",
        orderBy:2,
        img:"/dashboard/casinoImg/1722949819casino-playtech.webp"
      },
      {
        name:"Crash X",
        icon:"",
        orderBy:3,
        img:"/dashboard/casinoImg/1722955719slot-crash.webp"
      },
      {
        name:"Aero",
        icon:"", 
        orderBy:4,
        img:"/dashboard/casinoImg/1722955723slot-aero.webp"
      },
      {
        name:"Aviator",
        icon:"",
        orderBy:5,
        img:"/dashboard/casinoImg/1723432803spribe-aviator.webp"
      },
    ]

  },
]




export const footerImages = [
  {
    providerName:"EVOLUTION",
    img:"/footerImg/nexo-1.webp",
    id:"1"
  },
  {
    providerName: "JiLi",
    img:"/footerImg/nexo-2.webp",
    id:"2"
  },
  {
    providerName: "",
    img:"/footerImg/nexo-4.webp",
    id:"4"
  },

  {

    img:"/footerImg/nexo-5.webp",
    id:"5"
  },
  {
    providerName: "EZUGI",
    img:"/footerImg/nexo-6.webp",
    id:"6"
  },


  {
    img:"/footerImg/nexo-8.webp",
    id:"8"
  },

 

  {
    img:"/footerImg/nexo-12.webp",
    id:"12"
  },
  {
    img:"/footerImg/nexo-13.webp",
    id:"13"
  },
  {
    img:"/footerImg/nexo-16.webp",
    id:"16"
  },
  {
    img:"/footerImg/nexo-19.webp",
    id:"19"
  },
  {
    img:"/footerImg/nexo-20.webp",
    id:"20"
  },
  {
    img:"/footerImg/nexo-23.webp",
    id:"23"
  },

  

]


export const addcashJson =[
  {
    name:"channel-1",
    img:"/sidebar/addcash/deposit1.a1d4706b.webp",
    eta:"5",
    range:'100-50000',
    id:"1"
  },
  {
    name:"channel-2",
    img:"/sidebar/addcash/deposit2.fe15ed7f.webp",
    eta:"5",
    range:'100-50000',
    id:"2"
  },
  {
    name:"channel-3",
    img:"/sidebar/addcash/deposit3.db4d0e05.webp",
    eta:"5",
    range:'100-50000',
    id:"3"
  },
]


export const addPaymentBanks = [
  {
    name:'PAYTM',
    img:'/paymentimg/logo-2.587648a0.png',
    id:'1'
  },
  {
    name:'bank',
    img:'/paymentimg/logo-3.14cffffc.png',
    id:'2'
  },
  {
    name:'UPI',
    img:'/paymentimg/logo-1.e9681612.png',
    id:'3'
  },

 
  {
    name:'icici',
    img:'/paymentimg/logo-4.3e4989db.png',
    id:'4'
  },
 
]
