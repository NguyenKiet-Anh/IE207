import React, {useState} from "react";
import ImageForLoginSignup from '../images/background-image/bg-img-loginform.jpg';

function Signup() {
    // Add functions for dynamic action here

    // Return UI of Signup Page here
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1"></div>
            {/* Column 1: for Background Image */}
            <div className="col-span-2 lg:col-span-2">
                <img className="w-full h-full"
                 src={ImageForLoginSignup} alt="Ảnh nền đăng nhập" />
            </div>
            {/* Column 2: for Signup Form */}
            <div className="col-span-2 lg:col-span-1 border border-black-500">
                {/* Row 1 */}
                <div>
                    <p className="font-bold text-3xl mt-1 mb-5 ml-2">
                        Đăng ký tài khoản mới
                    </p>                        
                </div>
                {/* Row 2: Username */}
                <div>
                    <div className="mb-3 ml-2">
                        <label htmlFor="username-signup"
                            className="font-bold text-lg"
                        >Tên người dùng</label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input id="username-signup" name="username-signup" type="text" 
                            className="w-full h-full rounded rounded-lg border border-black-500"
                            placeholder="  Tên người dùng..."
                        />
                    </div>
                </div>
                {/* Row 3: Password */}
                <div>
                    <div className="mb-3 ml-2">
                        <label htmlFor="password-signup"
                            className="font-bold text-lg"
                        >Mật khẩu</label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input id="password-signup" name="password-signup" type="text" 
                            className="w-full h-full rounded rounded-lg border border-black-500"
                            placeholder="  Mật khẩu..."
                        />
                    </div>
                </div>
                {/* Row 4: Password Again */}
                <div>
                    <div className="mb-3 ml-2">
                        <label htmlFor="password-again-signup"
                            className="font-bold text-lg"
                        >Nhập lại mật khẩu</label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input id="password-again-signup" name="password-again-signup" type="text" 
                            className="w-full h-full rounded rounded-lg border border-black-500"
                            placeholder="  Nhập lại mật khẩu..."
                        />
                    </div>
                </div>
                {/* Row 5: Phone Number */}
                <div>
                    <div className="mb-3 ml-2">
                        <label htmlFor="phone-signup"
                            className="font-bold text-lg"
                        >Số điện thoại</label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input id="phone-signup" name="phone-signup" type="text" 
                            className="w-full h-full rounded rounded-lg border border-black-500"
                            placeholder="  Số điện thoại..."
                        />
                    </div>
                </div>
                {/* Row 6: Email */}
                <div>
                    <div className="mb-3 ml-2">
                        <label htmlFor="email-signup"
                            className="font-bold text-lg"
                        >Email</label>
                    </div>
                    <div className="h-10 mb-3 ml-2 mr-2">
                        <input id="email-signup" name="email-signup" type="text" 
                            className="w-full h-full rounded rounded-lg border border-black-500"
                            placeholder="  Email..."
                        />
                    </div>
                </div>
                {/* Row 7: Accept license */}
                <div className="mt-4 mb-4">
                    <input id="accepted-license-signup" name= "accepted-license-signup" type="checkbox" 
                        className="ml-2 mr-2"
                    />
                    <label htmlFor="accepted-license-signup"
                    >Tôi chấp nhận các điều khoản sử dụng</label>
                </div>
                {/* Row 8: Signup button */}
                <div className="flex justify-center mb-4">
                    <button
                        className="w-4/5 h-10 bg-red-500 text-white font-bold rounded rounded-lg"
                    >
                        <p className="italic">ĐĂNG KÝ</p>
                    </button>
                </div>
                {/* Row 9: or */}
                <div className="grid grid-cols-1 mb-4">
                    {/* <div className="col-span-2 mt-2 ml-2">
                        __________________________
                    </div> */}
                    <div className="col-span-1 text-center italic mt-3">
                        Hoặc
                    </div>
                    {/* <div className="col-span-2 mt-2 mr-2">
                        ___________________________
                    </div> */}
                </div>
                {/* Row 10: already have account? */}
                <div className="flex justify-center mb-4 ">
                    <p>
                        Đã có tài khoản?
                        <a href="/login"
                            className="text-red-500 font-bold italic hover:text-black"
                        > Đăng nhập </a>
                        tại đây
                    </p>
                </div>
            </div>
            <div className="lg:col-span-1"></div>
        </div>
    );
};

export default Signup;