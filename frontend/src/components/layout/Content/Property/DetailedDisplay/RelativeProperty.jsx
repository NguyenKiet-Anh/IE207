import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SmallPropertyCard from "../SmallPropertyCard";

import CardDataForSale from "../../../../../assets/EstateForSale/EstateForSaleCardData";

const RelativeCarousel = () => {
    var slider_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    };

    const arrowRef = useRef(null);

    return (
        <div className="py-5 relative">
            <p className="font-bold text-lg">Có thể bạn quan tâm</p>
            <Slider ref={arrowRef} {...slider_settings}>                            
                    {CardDataForSale.map((card) => (
                        <SmallPropertyCard
                            kind={card.kind}
                            id={card.id}
                            img={card.img}
                            title={card.title}
                            about={card.about}
                            price={card.price}
                            address={card.address}
                            area={card.area}
                            bedroom={card.bedroom}
                            bathroom={card.bathroom}
                            furniture={card.furniture}
                            policy={card.policy}
                            author_img={card.author_img}
                            author_name={card.author_name}
                            update={card.update}
                            phone={card.phone}
                            map={card.map}
                        ></SmallPropertyCard>
                    ))}                                               
            </Slider>

            <button
                onClick={() => arrowRef.current.slickPrev()}
                className="absolute top-1/2 left-[-50px]"
            >                
                <div className="bg-white p-3 rounded-xl hover:bg-red-300 border border-gray-500">
                    <FaArrowLeft></FaArrowLeft>
                </div>
            </button> 

            <button
                onClick={() => arrowRef.current.slickNext()}
                className="absolute top-1/2 right-[-50px]"
            >
                <div className="bg-white p-3 rounded-xl hover:bg-red-300 border border-gray-500">
                    <FaArrowRight></FaArrowRight>    
                </div>                
            </button>  
    </div>

    );
};
export default RelativeCarousel;