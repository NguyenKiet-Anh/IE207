import Filter from '../components/layout/Filter';
import PropertyCard from '../components/layout/Content/Property/PropertyCard';
import TopView from '../components/layout/Content/TopView';
import Map from '../components/layout/Content/Property/Map';

import CardDataForSale from '../assets/EstateForSale/EstateForSaleCardData';

function EstateForSale() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 mb-20">
            <div></div>
            <div className='col-span-3'>
                <Filter></Filter>
                <div className='mt-5 mr-1'>
                    {CardDataForSale.map((card) => (
                        <PropertyCard
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
                        ></PropertyCard>
                    ))}
                </div>
            </div>              
            <div className='col-span-1 block'>
                <div className='h-1/2 mb-10'>
                    <p className='font-bold text-lg mb-3'>Tin tức nóng nhất tuần qua</p>
                    <TopView></TopView>
                </div>
                <div className='h-1/2 pt-10'>
                    {CardDataForSale.map((card, index) => (
                        <Map
                            key={index}
                            map={card.map}
                        ></Map>
                    ))}
                </div>
            </div>
            <div></div>
        </div>                        
    )
};

export default EstateForSale;