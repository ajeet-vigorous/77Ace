import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { casinoLogin } from "../../redux/reducers/sport_reducer";
import Loader from "../../component/loader/Loader";



const IframeCasino = () => {   
   
    const dispatch = useDispatch();
    const {casinoData , loading, error} = useSelector((state) => state.sport);
    

   

    let { gameId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const casinoLoginData = {
            "gameId": gameId,
            "platformId": "mobile",
            "redirectUrl": `${window.location.origin}/dashboard`, 
            "theme": "bmx",
        };
      dispatch(casinoLogin(casinoLoginData))
    }, []);


    console.log(error,'error')


    if(error){
       return <div className=" flex items-center justify-center">
            <div className=" text-black p-5 rounded">
                <h1 className="text-2xl font-bold"></h1>
                <p>{error}</p>
            </div>
        </div>
    }

   
   

         

            

    return (
        <div className='iframeCasinoMain mb-20'>
            {/* {showAlert && <div className={`absolute top-[2%] right-[2%] px-5 py-3 z-30 ${errorType === 1 ? "bg-red-600" : "bg-green-600"}  rounded`}><span className='white-text font-bold'>{resMessage}</span></div>} */}
            {loading === true ?
          <Loader/>
                : null}

            {casinoData ? (
                <>
                    {loading === true ?
                        <Loader/>
                        : null}
                    <div className="afterFooter">
                        <iframe src={casinoData.url} title=" " loading='lazy' className=" mx-auto w-[100%] h-screen   "  name="flll" allowfullscreen="true" />
                    </div>
                </>

            ) : ""
            }

        </div>
    );
};

export default IframeCasino;
