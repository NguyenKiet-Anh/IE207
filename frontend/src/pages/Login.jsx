import React, { useState} from "react";
import ImageForLoginSignup from '../images/background-image/bg-img-loginform.jpg';
import FaceBookIcon from '../images/icons/facebook.png';
import GoogleIcon from '../images/icons/google.png';

function Login() {
    // Add functions for dynamic actions here

    // Return UI for Login page here
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 mt-5"> {/* The breakpoint will be lg: 1024px*/}
            <div className="lg:col-span-1"></div> {/* The first column */}

            <div className="col-span-2 lg:col-span-2"> {/* The second column - column for background image */}
                <img 
                    src={ImageForLoginSignup} 
                    alt="Hình nền đăng nhập" 
                    className="w-full h-full"
                />
            </div>

            <div className="col-span-2 lg:col-span-1 border border-black-500 rounded rounded-r-lg"> {/* Column for LoginForm */}
                <div>
                    <p className="font-bold text-3xl mt-2 mb-5 ml-2">
                        Chào mừng trở lại!
                    </p>
                </div>
                <div>
                    <div className="font-bold text-lg mb-3 ml-2">
                        <label htmlFor="username-login"> Tên người dùng </label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input 
                            id="username-login" 
                            name="username-login" 
                            type="text" 
                            placeholder="  Tên người dùng ..."
                            className="w-full h-full rounded-lg border border-black-500"
                        />
                    </div>
                </div>
                <div>
                    <div className="font-bold text-lg mb-3 ml-2">
                        <label htmlFor="password-login">
                            Mật khẩu
                        </label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input 
                            id="password-login"
                            name="password-login"
                            type="text" 
                            placeholder="  Mật khẩu ..."
                            className="w-full h-full rounded-lg border border-black-500"
                        />
                    </div>
                </div>
                <div className="mb-3 ml-2">
                    <input 
                        id="remember-password-checkbox" 
                        name="remember-password-checkbox" 
                        type="checkbox"
                        className="mr-2"
                    />
                    <label htmlFor="remember-password-checkbox"
                        className="mr-20"
                    >Nhớ mật khẩu</label>
                    <label htmlFor="remember-password-checkbox"
                        className="font-bold text-red-500"
                    >Quên mật khẩu?</label>
                </div>
                <div className="flex h-10 justify-center"> {/* Login button here */}
                    <button className="w-4/5 bg-red-500 text-white font-bold italic rounded-lg">
                        ĐĂNG NHẬP
                    </button>
                </div>                    
                <div className="grid grid-cols-5">
                    <div className="col-span-2 mt-2 ml-2">
                    ___________________________
                    </div>
                    <div className="col-span-1 text-center italic mt-3">
                        Hoặc
                    </div>
                    <div className="col-span-2 mt-2 mr-2">
                        ___________________________
                    </div>
                </div>
                <div className="flex h-10 lg:h-12 justify-center mt-4">
                        <button className="w-4/5 rounded-lg border border-black-500">
                            <div className="flex justify-center items-center">
                                <img 
                                    src={FaceBookIcon} 
                                    alt="Hình đăng nhập với Facebook" 
                                    width={30}
                                    height={30}
                                    className="mr-2"
                                /> 
                                Đăng nhập với <span style={{color: 'blue'}} className="ml-1"> <b>FaceBook</b> </span>
                            </div>
                        </button>
                </div>
                <div className="flex h-10 lg:h-12 justify-center mt-4">
                    <button 
                        className="w-4/5 rounded-lg border border-black-500"
                    >
                        <div className="flex justify-center items-center">
                                <img 
                                    src={GoogleIcon} 
                                    alt="Hình đăng nhập với Google" 
                                    width={30}
                                    height={30}
                                    className="mr-2"
                                /> 
                                Đăng nhập với <span style={{color: 'blue'}} className="ml-1"> <b>Google</b> </span>
                        </div>
                        
                    </button>
                </div>
                <div className="flex items-center justify-center mt-4 mb-4"> {/* 'Already have an account?' here*/}
                    <p> 
                        Không có tài khoản?
                        <a href="/signup" className="text-red-500 font-bold italic hover:text-black" > Đăng ký </a>
                        tại đây
                    </p>
                </div>        
            </div> 

            <div className="lg:col-span-1"></div>  {/* The fouth column */}   
        </div>
    );
};

export default Login;