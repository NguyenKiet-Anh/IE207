import FeatureCard from "../components/layout/Content/Home/FeatureCard";
import FindPriceIcon from "../images/background-image/find-price.png";
import InterestRateIcon from "../images/background-image/interest rate.png";
import NearLocationIcon from "../images/background-image/near-location.png";


import Carousel from "../components/layout/Content/Home/Carousel";
import NewCarousel from "../components/layout/Content/Home/NewCarousel";
import HotCarousel from "../components/layout/Content/Home/HotCarousel";

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

    return (
        <div>
            <div className="pt-5 pb-10">
                <Carousel></Carousel>
            </div>
            <div className="flex justify-center">
                <div className="w-5/6">

                    <div className="py-5">
                        <p className="font-bold text-lg">Tin nổi bật</p>
                        <p>Làm sau</p>
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