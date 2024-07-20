import { useState, useEffect } from "react";
import PropertyCard from "../components/layout/Content/Property/PropertyCard";
import WishListSaleData from '../assets/WishListData/WishListSaleData';
import WishListRentData from "../assets/WishListData/WishListRentData";


function WishList() {
    // Variables here
    const [isSale, setIsSale] = useState(true);

    const handleOnSale = () => {
        setIsSale(true);
    };

    const handleOffSale = () => {
        setIsSale(false);
    };

    // Functions here

    // Render here
    return (
        <div className="py-3">
            <div className="flex justify-between mx-5">
                <div className="flex gap-3">                    
                    <button
                        className={`p-4 ${isSale? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handleOnSale}
                    >
                        <p className="font-bold">Nhà bán ({WishListSaleData.length})</p>
                    </button>
                    <button
                        className={`p-4 ${isSale? "hover:bg-red-500 hover:text-white" : "bg-red-500 text-white"}`}
                        onClick={handleOffSale}
                    >
                        <p className="font-bold">Nhà cho thuê ({WishListRentData.length})</p>
                    </button>
                </div>
                <button
                    className="p-4 hover:bg-red-500 hover:text-white"
                >
                    <p className="font-bold">Xóa tất cả</p>
                </button>
            </div>
            <hr />
            {isSale? (
                <div className="2xl:flex">
                    {WishListSaleData.map((data) => (
                        <div className="flex justify-center">
                            <div className="md:w-2/3 lg:w-5/6">
                                <PropertyCard
                                    kind={data.kind}
                                    id={data.id}
                                    img={data.img}
                                    title={data.title}
                                    about={data.about}
                                    price={data.price}
                                    address={data.address}
                                    area={data.area}
                                    bedroom={data.bedroom}
                                    bathroom={data.bathroom}
                                    furniture={data.furniture}
                                    policy={data.policy}
                                    author_img={data.author_img}
                                    author_name={data.author_name}
                                    update={data.update}
                                ></PropertyCard>
                            </div>
                        </div>
                    ))}       
                </div>
            ) : (
                <div className="2xl:flex">
                    {WishListRentData.map((data) => (
                        <div className="flex justify-center">
                            <div className="md:w-2/3 lg:w-5/6">
                                <PropertyCard
                                    kind={data.kind}
                                    id={data.id}
                                    img={data.img}
                                    title={data.title}
                                    about={data.about}
                                    price={data.price}
                                    address={data.address}
                                    area={data.area}
                                    bedroom={data.bedroom}
                                    bathroom={data.bathroom}
                                    furniture={data.furniture}
                                    policy={data.policy}
                                    author_img={data.author_img}
                                    author_name={data.author_name}
                                    update={data.update}
                                ></PropertyCard>
                            </div>
                        </div>
                    ))}       
                </div>
            )}            
            <div>
                <div className="flex justify-center">
                    <button className="bg-red-500 p-3 rounded-xl hover:bg-black lg:w-[150px] xl:w-[200px]">
                        <p className="font-bold text-white">Xem thêm</p>
                    </button>
                </div>                
            </div>
        </div>
    )
};
export default WishList;
