import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PhoneIcon from '../images/icons/smartphone-broker.png';
import ZaloIcon from '../images/icons/zalo-footer-column-1.png';
import FacebookIcon from '../images/icons/facebook.png';
import BrokerProperty from '../components/layout/Content/Broker/BrokerProperty';

import BrokerData from '../assets/BrokerData/BrokerData';
import CardDataForSale from '../assets/EstateForSale/EstateForSaleCardData';
import CardDataForRent from "../assets/EstateForRent/EstateForRentCardData";

function AuthorViewer(){
    // Variables here
    const { authorId } = useParams();
    const [brokerDataWanted, setBrokerDataWanted] = useState({});
    const [saleShow, setSaleShow] = useState(true);
    const [saleDataLen] = useState(CardDataForSale.length);
    const [rentDataLen] = useState(CardDataForRent.length);
    // functions here
    useEffect(() => {
            const getBrokerData = async () => {    
                for(let i=0;i<BrokerData.length;i++)
                {   
                    if ( parseInt(BrokerData[i].id) === parseInt(authorId) ) {
                        setBrokerDataWanted(BrokerData[i]);                        
                    }
                }                
            };
            getBrokerData();
    }, []);

    const handleOnSaleShow = () => {
        setSaleShow(true);
    };

    const handleOffSaleShow = () => {
        setSaleShow(false);
    };    
    // 
    return (
        <div className="flex flex-wrap justify-center lg:gap-2">
            <div className="w-full lg:w-2/6">
                <div>
                    <div className="border-b border-black py-3">
                        <div className="flex justify-center">
                            <img 
                                src={brokerDataWanted.img} 
                                alt="Hình đại diện người đăng" 
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex justify-center mt-3">
                            <p className="font-bold text-2xl">{brokerDataWanted.broker_name}</p>
                        </div>                        
                    </div>
                    <div className="border-b border-black py-3">
                        <div className="ml-2">
                            <p className="font-bold text-lg">{brokerDataWanted.address}</p>
                            <p>{brokerDataWanted.about}</p>
                        </div>                        
                    </div>
                    <div className="py-3">
                        <p className="ml-2 font-bold text-lg">Liên hệ</p>
                        <div className="flex">
                            <div className="flex items-center gap-2 bg-slate-200 p-2 m-2 rounded-md">
                                <img 
                                    src={PhoneIcon} 
                                    alt="Icon điện thoại" 
                                    className="w-7 h-8"
                                />                                
                                <p className="font-bold">{brokerDataWanted.phone}</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex items-center gap-2 bg-slate-200 p-2 m-2 rounded-md">
                                <img 
                                    src={ZaloIcon} 
                                    alt="Icon Zalo" 
                                    className="w-7 h-8"
                                />
                                <p className="font-bold">{brokerDataWanted.zalo}</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex gap-2 bg-slate-200 p-2 m-2 rounded-md">
                                <img 
                                    src={FacebookIcon}
                                    alt="Icon facebook" 
                                    className="w-7 h-7"
                                />
                                <p className="font-bold">{brokerDataWanted.facebook}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/6 border-l-2">        
                
                    { saleShow? (                        
                        <>
                        <div className="w-full flex ml-3 border-b-2">
                            <div className="w-1/3 flex justify-center">
                                <button className="py-5 bg-red-500 text-white px-2">
                                    <p className="font-bold">Nhà đất bán ({saleDataLen})</p>
                                </button>
                            </div> 

                            <div className="w-1/3 flex justify-center">
                                <button 
                                    className="py-5 hover:bg-red-500 hover:text-white hover:px-2" 
                                    onClick={handleOffSaleShow}    
                                >
                                    <p className="font-bold">Nhà cho thuê ({rentDataLen})</p>
                                </button>
                            </div>
                        </div>
                        {/* Show content here */}
                        <div className="xl:flex xl:flex-wrap">
                            {CardDataForSale.map((card) => (                                
                                <BrokerProperty
                                    id={card.id}
                                    img={card.img}
                                    price={card.price}
                                    address={card.address}
                                    bedroom={card.bedroom}
                                    bathroom={card.bathroom}
                                    author_img={card.author_img}
                                    author_name={card.author_name}
                                    update={card.update}
                                >
                                </BrokerProperty>
                            ))}
                        </div>
                        </>
                    ) : (
                        <>
                        <div className="w-full flex ml-3 border-b-2">
                            <div className="w-1/3 flex justify-center">
                                <button 
                                    className="py-5 hover:bg-red-500 hover:text-white hover:px-2"
                                    onClick={handleOnSaleShow}
                                >
                                    <p className="font-bold">Nhà đất bán ({saleDataLen})</p>
                                </button>
                            </div> 

                            <div className="w-1/3 flex justify-center">
                                <button className="py-5 bg-red-500 text-white px-2" >
                                    <p className="font-bold">Nhà cho thuê ({rentDataLen})</p>
                                </button>
                            </div>
                        </div>
                        {/* Show content here */}
                        <div className="xl:flex xl:flex-wrap">                            
                        {CardDataForRent.map((card) => (      
                                <BrokerProperty
                                    id={card.id}
                                    img={card.img}
                                    price={card.price}
                                    address={card.address}
                                    bedroom={card.bedroom}
                                    bathroom={card.bathroom}
                                    author_img={card.author_img}
                                    author_name={card.author_name}
                                    update={card.update}
                                >
                                </BrokerProperty>                   
                        ))}
                    </div>
                            </>                            
                    )}                                           
                    
            </div>
        </div>
    );
};
export default AuthorViewer;
