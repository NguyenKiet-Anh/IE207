import { useState, useEffect } from "react";
import PropertyCard from "../components/layout/Content/Property/PropertyCard";
import WishListSaleData from '../assets/WishListData/WishListSaleData';
import WishListRentData from "../assets/WishListData/WishListRentData";

function WishList() {
    // Variables for State here - This State is used for managing if page's tab is 'sale' or not
    const [isSale, setIsSale] = useState(true);

    const handleOnSale = () => {
        setIsSale(true);
    };

    const handleOffSale = () => {
        setIsSale(false);
    };
    //  Variables for sear feature
    const [searchTerm, setSearchTerm] = useState('');
    const [searchSaleResult, setSearchSaleResult] = useState([]);
    const [searchRentResult, setSearchRentResult] = useState([]);

    // Functions here
    useEffect(() => {
        if (isSale) {
            if (searchTerm.trim() !== '') {
                const results = WishListSaleData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
                setSearchSaleResult(results);
            }
            else {            
                setSearchSaleResult(WishListSaleData);
            }
        }
        else {
            if (searchTerm.trim() !== '') {
                const results = WishListRentData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
                setSearchRentResult(results);
            }
            else {
                setSearchRentResult(WishListRentData);
            }
        }        
    }, [searchTerm, WishListSaleData, WishListRentData]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);        
    };

    const handleSearchInputSubmit = (event) => {
        event.preventDefault();
        if (isSale) {
            const results = WishListSaleData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchSaleResult(results);            
        }   
        else {
            const results = WishListRentData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchRentResult(results);
        }
    };
    
    const items_sale = searchTerm ? searchSaleResult : WishListSaleData
    const items_rent = searchTerm ? searchRentResult : WishListRentData
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
                <div className="flex items-center space-x-3 lg:w-1/2 lg:flex lg:justify-end">
                    <form onSubmit={handleSearchInputSubmit} className="lg:w-1/2">
                        <input 
                            type="text" 
                            placeholder="   Tìm kiếm ..."
                            className="border-2 rounded-lg w-full"
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                        />
                    </form>                    
                    <button
                        className="p-4 hover:bg-red-500 hover:text-white"
                    >
                        <p className="font-bold">Xóa tất cả</p>
                    </button>
                </div>                
                
            </div>
            <hr />
            {isSale? (
                <div className="2xl:flex">
                    {items_sale.map((data) => (
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
                    {items_rent.map((data) => (
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
