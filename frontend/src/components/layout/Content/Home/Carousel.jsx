import { React, useRef } from "react";
import Slider from "react-slick";
import SlickImageData from "../../../../assets/SlickImage/SlickImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import HomeFilter from "./HomeFilter";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        reponsive: [

        ]
    }
    const arrowRef = useRef(null);
    return (
        <div className="relative">
            <Slider ref={arrowRef} {...settings}>
                {SlickImageData.map((image) => (
                    <img
                        src={image.img}
                        alt="Hình nền cho Slider"
                        className="w-full h-[300px] lg:h-[500px] rounded"
                    />
                ))}           
            </Slider>                      

            <div className="absolute top-1/4 w-full flex justify-center">
                <div className="w-1/2">
                    <HomeFilter></HomeFilter>
                </div>

                <button
                    onClick={() => arrowRef.current.slickPrev()}
                    className="absolute top-1/4 left-[50px]"
                >                
                    <div className="bg-white p-3 rounded-xl hover:bg-red-300 border border-gray-500">
                        <FaArrowLeft></FaArrowLeft>
                    </div>
                </button> 

                <button
                    onClick={() => arrowRef.current.slickNext()}
                    className="absolute top-1/4 right-[50px]"
                >
                    <div className="bg-white p-3 rounded-xl hover:bg-red-300 border border-gray-500">
                        <FaArrowRight></FaArrowRight>    
                    </div>                
                </button>
            </div>            
        </div>            
    );
};
export default Carousel;