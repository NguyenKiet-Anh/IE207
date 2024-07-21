import { useState, useEffect } from 'react';

import AccountCard from '../components/layout/Content/Broker/AccountCard';
import PropertyCard from '../components/layout/Content/Property/PropertyCard';
import NewsList from '../components/layout/Content/News/NewsList';

import BrokerData from '../assets/BrokerData/BrokerData';
import CardDataForProperty from '../assets/AdminData/AdminProperty';
import NewsListData from '../assets/News/NewsListData';

function AdminPage() {
    // Variables here
    const [accountActived, setAccountActived] = useState(true);
    const [propertyActived, setPropertyActived] = useState(false);
    const [newsActived, setNewsActived] = useState(false);    

    // Functions here
    const handleAccountActived = () => {
        setAccountActived(true);
        setPropertyActived(false);
        setNewsActived(false);
    };

    const handlePropertyActived = () => {
        setAccountActived(false);
        setPropertyActived(true);
        setNewsActived(false);
    };

    const handleNewsActived = () => {
        setAccountActived(false);
        setPropertyActived(false);
        setNewsActived(true);
    };

    useEffect(() => {
        const getDataForAdminPage = () => {

        };
        getDataForAdminPage();
    }, []);
    
    //  Render return here
    return (
        <div className='flex-col'>
            <div className='flex flex-wrap gap-3 justify-between'>
                <div className='flex-row space-x-5 mx-5'>
                    <button 
                        className={`p-4 font-bold ${accountActived? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handleAccountActived}
                    >
                        <p>Tài khoản (0)</p>
                    </button>
                    <button 
                        className={`p-4 font-bold ${propertyActived? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handlePropertyActived}
                    >
                        <p>Nhà đất (0)</p>
                    </button>
                    <button 
                        className={`p-4 font-bold ${newsActived? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handleNewsActived}
                    >
                        <p>Tin tức (0)</p>
                    </button>
                </div>
                <div className='flex items-center m-3'>
                    <input 
                        type="text" 
                        placeholder='   Tìm kiếm ...'
                        className='w-[250px] border-2 rounded-lg'
                    />
                </div>
            </div>
            
            <hr />
            <div>
                { accountActived && 
                    <div className='lg:flex flex-wrap justify-center'>
                        {BrokerData.map((data) => (
                            <AccountCard
                                id={data.id}
                                img={data.img}
                                account_name={data.broker_name}
                                address={data.address}
                                phone={data.phone}
                                total_posts={data.num_sale + data.num_rent}
                                account_type={'Premium'}
                                date_bought = {'15/07/2024'}
                            ></AccountCard>
                        ))}                   
                    </div>
                }
                { propertyActived &&
                <div className='lg:flex lg:justify-center'>
                    <div className='lg:w-2/3 xl:w-1/2'>
                        {CardDataForProperty.map((data) => (
                            <PropertyCard
                                kind={data.kind}
                                id={data.id}
                                img={data.img}
                                title={data.title}
                                price={data.price}
                                address={data.address}
                                area={data.area}
                                bedroom={data.bedroom}
                                bathroom={data.bathroom}
                                furniture={data.furniture}
                                policy={data.policy}
                                update={data.update}
                            ></PropertyCard>
                        ))}                   
                    </div>
                </div>
                }
                { newsActived &&
                    <div className='lg:flex justify-center'>
                        <div className='lg:w-2/3'>
                            {NewsListData.map((data) => (
                                <NewsList
                                    id={data.id}
                                    img={data.img}
                                    title={data.title}
                                    date={data.date}
                                    hour={data.hour}
                                    author={data.author}
                                    content={data.content}
                                ></NewsList>
                            ))}    
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default AdminPage;