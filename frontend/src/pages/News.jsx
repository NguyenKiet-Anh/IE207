import { Fragment} from "react";
import NewsList from '../components/layout/Content/News/NewsList';
import TopView from '../components/layout/Content/TopView';

import NewsListData from "../assets/News/NewsListData";

function News() {
    // Functions here

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
                                <input 
                                    id="news-search-bar" 
                                    type="text" 
                                    placeholder="   Tìm kiếm tin..."
                                    className="w-1/4 h-9 mr-10 rounded rounded-lg border border-black"
                                />
                            </div>                            
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-2/3">
                                <p className="ml-10 font-bold text-2xl">Tin tức</p>
                                { NewsListData.map((newslist) => (
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