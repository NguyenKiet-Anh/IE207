import React from "react";
import { NavLink } from 'react-router-dom';
import AddFavouriteIcon from '../../images/icons/add-favourite.png';
import LogoImage from '../../images/icons/logo.png';

function Navbar() {
    // Some functions should be put here

    // Return UI for navbar here
    return (
        <nav>            
            {/* Navbar option list */}
            <div className="pb-5">
                <ul className="grid grid-cols-10 gap-2 h-20">
                    <li className="flex items-center justify-center font-bold">
                        <img src={LogoImage} alt="Logo trang web" />
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to="/estate-for-sale"
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Real estate for sale */}                        
                            <p>Nhà đất bán</p> 
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to="estate-for-rent"
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Real estate for rent */}
                            <p>Nhà đất cho thuê</p>
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to='analysis-page'
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Market analysis  */}
                            <p>Phân tích</p>
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to="news"
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* News */}
                            <p>Tin tức</p>
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to='forum'
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Forum */}
                            <p>Diễn đàn</p>
                        </NavLink>
                    </li>

                    <li></li>
                    <li></li>
                    
                    <li className="flex items-center justify-center font-bold">
                        <NavLink>
                            <img 
                                src={AddFavouriteIcon} 
                                alt="Hình ảnh icon Xem danh sách yêu thích" 
                                width={40}
                                height={40}
                                className="hover:bg-red-300 hover:rounded-lg"
                            />
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center ml-2 font-bold mr-5">
                        <NavLink
                            to="/login"
                        >   {/* Login */}
                            <button className="flex justify-center bg-red-500 rounded rounded-2xl hover:bg-black">
                                <p className="text-white py-3 md:px-4">Đăng nhập</p>
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;