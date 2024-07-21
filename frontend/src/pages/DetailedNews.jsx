import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopView from '../components/layout/Content/TopView';
import NewsListData from '../assets/News/NewsListData';

function DetailedNews() {
    // Variables here
    const { newId } = useParams();
    const [newsData, setNewsData] = useState({});

    // Functions here
    useEffect(() => {
        const getNewsData = () => {
            for(let i=0;i<NewsListData.length;i++) {
                if (parseInt(NewsListData[i].id) === parseInt(newId)) {
                    setNewsData(NewsListData[i]);
                }
            }
        };
        getNewsData();
    }, []);

    // Return render here
    return (
        <div className='flex flex-wrap justify-center'>
            <div className='sm:w-2/3'>
                <div className='mx-2 space-y-4'>
                    <p className='italic'>{newsData.date} {newsData.hour}</p>
                    <div className='flex items-center space-x-3'>
                        <img 
                            src={newsData.author_img} 
                            alt="Hình đại diện người đăng" 
                            className='w-14 h-14 rounded-full'
                        />
                        <p className='text-lg'>{newsData.author}</p>
                    </div>
                    <p className='font-bold text-2xl'>{newsData.title}</p>
                    <div className='flex-col space-y-5 py-5'>
                        <img src={newsData.img} alt="Hình ảnh 1" className='w-full md:h-[350px] xl:h-[400px]'/>
                        <p>{newsData.content}</p>
                        <img src={newsData.img} alt="Hình ảnh 2" className='w-full md:h-[350px] xl:h-[400px]'/>
                        <p>{newsData.content}</p>
                    </div>
                    <p className='text-lg italic text-right mx-5'>{newsData.author}</p>
                </div>                
            </div>
            <div className='sm:w-1/6'>
                <div className='ml-3'>
                    <p className='font-bold text-xl'>Tin tức nóng nhất tuần qua</p>
                    <TopView></TopView>
                </div>                
            </div>
        </div>
    );
};
export default DetailedNews;