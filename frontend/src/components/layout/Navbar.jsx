import React from "react";
import { NavLink } from 'react-router-dom';
import AddFavouriteIcon from '../../images/icons/add-favourite.png';
import UserIcon from '../../images/icons/user.png';
import LogoImage from '../../images/icons/logo.png';

import { useAuth } from "../../AuthContext";
import { ActiveButton } from "../../ActiveButton";

function Navbar() {
    // Some functions should be put here
    const { isLoggedIn, logout } = useAuth();
    const handleLogout = async () => {
        await logout()        
    };

    const { isWishListActived, 
        setIsWishListActived, 
        wishListActive, 
        wishListDeactive, 
        isAccountActived,
        setAccountIsActived,
        accountActive,
        accountDeactive } = ActiveButton();    

    const handleWishListButton = async () => {
        await accountDeactive();
        await wishListActive();
    };
    const handleAccountButton = async () => {
        await wishListDeactive()
        await accountActive();
    };
    const handleDeactiveButton = async() => {
        await wishListDeactive();
        await accountDeactive();
    };

    // Return UI for navbar here
    return (
        <nav className="sticky top-0 bg-white pb-5">
            {/* Navbar option list */}
            <div>
                <ul className="grid grid-cols-10 gap-2 h-20">
                    <li className="flex items-center justify-center font-bold"> 
                        <NavLink
                            to="/home"
                            onClick={handleDeactiveButton}
                        >
                            <img src={LogoImage} alt="Logo trang web" />
                        </NavLink>                        
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to="/estate-for-sale"
                            onClick={handleDeactiveButton}
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Real estate for sale */}                        
                            <p>Nhà đất bán</p> 
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to="estate-for-rent"
                            onClick={handleDeactiveButton}
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Real estate for rent */}
                            <p>Nhà đất cho thuê</p>
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to='analysis-page'
                            onClick={handleDeactiveButton}
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Market analysis  */}
                            <p>Phân tích</p>
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to="news"
                            onClick={handleDeactiveButton}
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* News */}
                            <p>Tin tức</p>
                        </NavLink>
                    </li>

                    <li className="flex items-center justify-center font-bold">
                        <NavLink
                            to='forum'
                            onClick={handleDeactiveButton}
                            className="transition duration-800 border-b-4 border-transparent hover:border-black"
                        >   {/* Forum */}
                            <p>Diễn đàn</p>
                        </NavLink>
                    </li>

                    <li className="col-span-4 flex items-center">
                        { isLoggedIn? (
                            <>
                                <div className="w-full h-full flex items-center justify-end gap-2 md:gap-10 xl:gap-16 mr-1 md:mr-5">
                                    {isWishListActived? (
                                        <NavLink className="h-full flex items-center bg-red-300">
                                            <img 
                                                src={AddFavouriteIcon} 
                                                alt="Hình ảnh icon Xem danh sách yêu thích" 
                                                className="w-12 h-12"
                                            />
                                        </NavLink>
                                    ) : (
                                        <NavLink 
                                            to="/wish-list"
                                            className="h-full flex items-center hover:bg-red-300"
                                            onClick={handleWishListButton}
                                        >
                                            <img 
                                                src={AddFavouriteIcon} 
                                                alt="Hình ảnh icon Xem danh sách yêu thích" 
                                                className="w-12 h-12"
                                            />
                                        </NavLink>
                                    )}
                                    
                                    {isAccountActived? (
                                        <NavLink className="h-full flex items-center bg-red-300 md:px-2">
                                            <img 
                                                src={UserIcon} 
                                                alt="Hình ảnh icon tới trang tài khoản" 
                                                className="w-8 h-8"
                                            />
                                        </NavLink>
                                    ) : (
                                        <NavLink 
                                            to="/account-management"
                                            className="h-full flex items-center hover:bg-red-300 md:px-2"
                                            onClick={handleAccountButton}
                                        >
                                            <img 
                                                src={UserIcon} 
                                                alt="Hình ảnh icon tới trang tài khoản" 
                                                className="w-8 h-8"
                                            />
                                        </NavLink>
                                    )}

                                    <NavLink
                                        to="/login"
                                        onClick={handleLogout}
                                    >   {/* Login */}
                                        <button 
                                            className="bg-red-500 rounded-lg hover:bg-black">
                                            <p className="text-white font-bold px-1 py-3 md:px-4">Đăng xuất</p>
                                        </button>
                                    </NavLink>
                                </div>
                            </>
                            ) : (
                            <>
                            <div className="w-full h-full flex gap-3 md:gap-10 xl:gap-16 items-center justify-end mr-10">
                                <NavLink
                                    to="/login"
                                >   {/* Login */}
                                    <button 
                                        className="flex justify-center bg-red-500 rounded-lg hover:bg-black">
                                        <p className="text-white font-bold py-3 px-1 md:py-3 md:px-4">Đăng nhập</p>
                                    </button>
                                </NavLink>
                            </div>
                            </>
                        )}
                        
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;