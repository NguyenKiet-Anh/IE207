import { Fragment, useState, useEffect } from "react";
import NewsList from '../components/layout/Content/News/NewsList';
import TopView from '../components/layout/Content/TopView';

import NewsListData from "../assets/News/NewsListData";

function News() {
    // Variables here
    const [searchTerm, setSearchTerm] = useState(''); // Input gotten from search bar input
    const [searchResult, setSearchResult] = useState([]); // Results for search input

    // Functions here
    // If you want to show result immediately when search bar has been changed -> use useEffect
    useEffect(() => {
        if (searchTerm.trim() !== '')
        {
            const results = NewsListData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResult(results);
        }
        else {            
            setSearchResult(NewsListData);
        }
        
    }, [searchTerm, NewsListData]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const results = NewsListData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResult(results);
    };

    const items = searchTerm ? searchResult : NewsListData
    // Render return here
    return (
        <Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-3">
                <div></div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="block">
                        <div className="mb-3">
                            <p className="mb-3 font-bold text-2xl text-center">TIN TỨC BẤT ĐỘNG SẢN MỚI NHẤT TRÊN THỊ TRƯỜNG</p>
                            <p>Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ
                            liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo sát thực tế của đội ngũ phóng viên, biên tập của K&M.</p>
                            <div className="flex justify-end pb-3">
                                <form onSubmit={handleSearchSubmit}
                                    className="w-1/4 h-9 my-2 mr-10"
                                >
                                    <input 
                                        id="news-search-bar" 
                                        type="text" 
                                        placeholder="   Tìm kiếm tiêu đề..."                                         
                                        className="w-full h-full rounded rounded-lg border border-black"
                                        value = {searchTerm}
                                        onChange={handleSearchInputChange}
                                    />
                                </form>
                                
                            </div>                            
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-2/3">
                                <p className="ml-10 font-bold text-2xl">Tin tức</p>
                                { items.map((newslist) => (
                                    <NewsList
                                        id = {newslist.id}
                                        img = {newslist.img}
                                        date = {newslist.date}
                                        hour = {newslist.hour}
                                        author = {newslist.author}
                                        title = {newslist.title}
                                        content = {newslist.content}
                                    ></NewsList>
                                ))}
                            </div>
                            <div className="w-1/3">
                                <p className="ml-10 font-bold text-2xl">Bài viết xem nhiều nhất</p>
                                <TopView></TopView>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </Fragment>        
    );
};

export default News;