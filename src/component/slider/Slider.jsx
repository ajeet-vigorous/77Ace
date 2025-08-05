import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 
const SliderComponent = ({sliderData}) => {

    
 
   
    return (
        <>
            <section className="px-8">
                <Slider >
                    {sliderData?.map((item, index) => (
                        <div key={index} className="cursor-pointer">
                            <a
                                className='flex gap-4'>
                                {/* href={item.gameLink} */}
                                <img src={item.gameImg} alt={item.gameName} className='px-0' />
                            </a>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}
export default SliderComponent;
 