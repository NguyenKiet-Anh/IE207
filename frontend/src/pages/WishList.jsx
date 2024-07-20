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
        <div>
            <div className="flex justify-between mx-5">
                {isSale? (
                    <>
                        <div className="flex gap-3">                    
                            <div>
                                <button className="p-4 bg-red-500 text-white">
                                    <p className="font-bold">Nhà bán ({WishListSaleData.length})</p>
                                </button>
                            </div>
                            <div className="p-4 hover:bg-red-500 hover:text-white">
                                <button
                                    onClick={handleOffSale}
                                >
                                    <p className="font-bold">Nhà cho thuê ({WishListRentData.length})</p>
                                </button>
                            </div>
                        </div>
                        <div className="p-4 hover:bg-red-500 hover:text-white">
                            <button>
                                <p className="font-bold">Xóa tất cả</p>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex gap-3">                    
                            <div>
                                <button className="p-4 hover:bg-red-500 hover:text-white"
                                onClick={handleOnSale}>
                                    <p className="font-bold">Nhà bán ({WishListSaleData.length})</p>
                                </button>
                            </div>
                            <div className="p-4 bg-red-500 text-white">
                                <button>
                                    <p className="font-bold">Nhà cho thuê ({WishListRentData.length})</p>
                                </button>
                            </div>
                        </div>
                        <div className="p-4 hover:bg-red-500 hover:text-white">
                            <button>
                                <p className="font-bold">Xóa tất cả</p>
                            </button>
                        </div>
                    </>
                )}            
            </div>
            <hr />
            {isSale? (
                <div>
                    {WishListSaleData.map((data) => (
                        <div className="flex justify-center">
                            <div className="md:w-3/6 lg:w-5/6 2xl:w-1/2">
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
                <div>
                    {WishListRentData.map((data) => (
                        <div className="flex justify-center">
                            <div className="md:w-3/6 lg:w-5/6 2xl:w-1/2">
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
                    <button className="bg-red-500 p-3 rounded-xl hover:bg-black">
                        <p className="font-bold text-white">Xem thêm</p>
                    </button>
                </div>                
            </div>
        </div>
    )
};
export default WishList;
