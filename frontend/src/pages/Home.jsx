import FeatureCard from "../components/layout/Content/Home/FeatureCard";
import FindPriceIcon from "../images/background-image/find-price.png";
import InterestRateIcon from "../images/background-image/interest rate.png";
import NearLocationIcon from "../images/background-image/near-location.png";

import { Link } from "react-router-dom";
import { useState } from "react";

import Carousel from "../components/layout/Content/Home/Carousel";
import SpecialNews from "../components/layout/Content/Home/SpecialNews";
import NewCarousel from "../components/layout/Content/Home/NewCarousel";
import HotCarousel from "../components/layout/Content/Home/HotCarousel";

import NewsListData from "../assets/News/NewsListData";

function Home() {

    const feature_settings = [
        {
            img: FindPriceIcon,
            feature_name: "Tính giá đề nghị"
        },
        {
            img: InterestRateIcon,
            feature_name: "Tính lãi suất"
        },
        {
            img: NearLocationIcon,
            feature_name: "Tìm kiếm gần địa điểm"
        },
    ];    

    // Variables for changing news
    const [newsSelected, setNewsSelected] = useState({});
    // Functions for changing news in news list
    const handleChangeNews = (news) => {
        setNewsSelected(news);
    };

    // render return here
    return (
        <div>
            <div className="pt-5 pb-10">
                <Carousel></Carousel>
            </div>
            <div className="flex justify-center">
                <div className="w-5/6">

                    <div className="py-5">
                        <p className="font-bold text-lg">Tin nổi bật</p>    
                        <div className="flex flex-wrap lg:space-x-20">
                            <div className="w-1/2 lg:w-1/3 space-y-2 lg:space-y-6">
                                <img 
                                    src={newsSelected.img} 
                                    alt="Hình ảnh cho tin tức" 
                                    className="rounded"                                   
                                />
                                <p className="font-bold line-clamp-1 lg:text-lg">{newsSelected.author}</p>
                                <p className="text-sm line-clamp-1 lg:text-md">{newsSelected.date} - {newsSelected.hour}</p>
                            </div>
                            <div className="w-1/2 lg:w-1/3">                               
                                <div className="space-y-4 ml-3 lg:space-y-6 2xl:space-y-10">
                                    {NewsListData.slice(0, 8).map((news, index) => (
                                        <SpecialNews
                                            key={index}                                                                                        
                                            title={news.title}
                                            author={news.author}
                                            date={news.date}
                                            hour={news.hour}
                                            onNewsClick = {() => handleChangeNews(news)}
                                        ></SpecialNews>
                                    ))}
                                    <Link
                                        to="/news"
                                    >
                                        <p className="py-4 underline italic text-red-500 font-bold">Xem thêm</p>
                                    </Link>                     
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="py-5">
                        <HotCarousel></HotCarousel>
                    </div>

                    <div>
                        <NewCarousel></NewCarousel>
                    </div>

                    <div className="py-5">
                        <p className="py-4 font-bold text-lg">Hỗ trợ tiện ích</p>
                        <div className="flex justify-between">
                            {feature_settings.map((settings) => (
                                <FeatureCard
                                    img={settings.img}
                                    feature_name={settings.feature_name}
                                ></FeatureCard>
                            ))}                        
                        </div>                        
                    </div>

                </div>
            </div>            
        </div>
    );
};
export default Home;