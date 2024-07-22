import { useState, useEffect } from 'react';

import AccountCard from '../components/layout/Content/Broker/AccountCard';
import PropertyCard from '../components/layout/Content/Property/PropertyCard';
import NewsList from '../components/layout/Content/News/NewsList';

import BrokerData from '../assets/BrokerData/BrokerData';
import CardDataForProperty from '../assets/AdminData/AdminProperty';
import NewsListData from '../assets/News/NewsListData';

function AdminPage() {
    // Variables for State
    const [accountActived, setAccountActived] = useState(true);
    const [propertyActived, setPropertyActived] = useState(false);
    const [newsActived, setNewsActived] = useState(false);    

    // Variables for searching
    const [searchTerm, setSearchTerm] = useState('');
    const [searchAccountResults, setSearchAccountResults] = useState([]);
    const [searchPropertyResults, setSearchPropertyResults] = useState([]);
    const [searchNewsResults, setSearchNewsResults] = useState([]);

    // Functions for State
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

    // Functions for searching
    useEffect(() => {
        if (accountActived) {
            const results = BrokerData.filter((item) => item.broker_name.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchAccountResults(results);
        }
        else if (propertyActived) {
            const results = CardDataForProperty.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchPropertyResults(results);
        }
        else {
            const results = NewsListData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchNewsResults(results);
        }
    }, [searchTerm, BrokerData, CardDataForProperty, NewsListData]);
    
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchInputSubmit = (event) => {
        event.preventDefault();
        if (accountActived) {
            const results = BrokerData.filter((item) => item.broker_name.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchAccountResults(results);
        }
        else if (propertyActived) {
            const results = CardDataForProperty.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchPropertyResults(results);
        }
        else {
            const results = NewsListData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchNewsResults(results);
        }
    };

    const items_account = searchTerm ? searchAccountResults : BrokerData
    const items_property = searchTerm ? searchPropertyResults : CardDataForProperty
    const items_news = searchTerm ? searchNewsResults : NewsListData

    //  Render return here
    return (
        <div className='flex-col'>
            <div className='flex flex-wrap gap-3 justify-between'>
                <div className='flex-row space-x-5 mx-5'>
                    <button 
                        className={`p-4 font-bold ${accountActived? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handleAccountActived}
                    >
                        <p>Tài khoản ({BrokerData.length})</p>
                    </button>
                    <button 
                        className={`p-4 font-bold ${propertyActived? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handlePropertyActived}
                    >
                        <p>Nhà đất ({CardDataForProperty.length})</p>
                    </button>
                    <button 
                        className={`p-4 font-bold ${newsActived? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}`}
                        onClick={handleNewsActived}
                    >
                        <p>Tin tức ({NewsListData.length})</p>
                    </button>
                </div>
                <div className='flex items-center m-3 lg:w-1/2 lg:justify-end'>
                    <form onSubmit={handleSearchInputSubmit} 
                        className='border-2 rounded-lg lg:w-1/2'
                    >
                        <input 
                            type="text" 
                            placeholder='   Tìm kiếm ...'
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                        />
                    </form>                    
                </div>
            </div>
            
            <hr />
            <div>
                { accountActived && 
                    <div className='lg:flex flex-wrap justify-center'>
                        {items_account.map((data) => (
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
                        {items_property.map((data) => (
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
                            {items_news.map((data) => (
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