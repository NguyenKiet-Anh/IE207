import { useState, useEffect } from 'react';

import Filter from '../components/layout/Filter';
import PropertyCard from '../components/layout/Content/Property/PropertyCard';
import TopView from '../components/layout/Content/TopView';

import CardDataForRent from '../assets/EstateForRent/EstateForRentCardData';

function EstateForRent() {
    // Solving map issue here - i will use useEffect hook to change map
    const [mapData, setMapData] = useState({});
    
    useEffect(() => {

    }, [mapData]);

    const handleMapDispley = (card) => {
        setMapData(card);
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 mb-20">
            <div></div>
            <div className='col-span-3'>
                <Filter></Filter>
                <div className='mt-5 mr-1'>
                    {CardDataForRent.slice(0, 10).map((card) => (
                        <PropertyCard
                            kind={card.kind}
                            id={card.id}
                            img={card.img}
                            title={card.title}
                            about={card.abo}
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
                            onCardClick = {() => handleMapDispley(card)}
                        ></PropertyCard>
                    ))}
                </div>
            </div>              
            <div className='col-span-1 block'>
                <div className='h-1/6 mb-10'>
                    <p className='font-bold text-lg mb-3'>Tin tức nóng nhất tuần qua</p>
                    <TopView></TopView>
                </div>
                <div className='ml-2 pt-2 h-5/6'>                    
                    <img src={mapData.map} alt="Hình ảnh bản đồ" className="rounded-lg"/>
                </div>
            </div>
            <div></div>
        </div>                        
    )
};

export default EstateForRent;