import React from "react";
import LogoImage from '../../images/icons/logo.png';
import PhoneIcon from '../../images/icons/phone-vector.png';
import EmailIcon from '../../images/icons/email-icon.png';
import FacebookIcon from '../../images/icons/facebook.png';
import YoutubeIcon from "../../images/icons/youtube.jpg";
import ZaloIcon from '../../images/icons/zalo-contact.jpg';
import Linkedin from '../../images/icons/linkedin.jpg';
import MastercardIcon from '../../images/icons/Mastercard.png';
import VisaIcon from '../../images/icons/Visa.png';
import CashIcon from '../../images/icons/cash.png';
import JCBIcon from '../../images/icons/JCB.png';
import MomoIcon from '../../images/icons/momo.png';
import PaypalIcon from '../../images/icons/PayPal.png';

function Footer() {
    return (
        <div className="mt-10 bg-slate-100">
            <div className="flex flex-wrap lg:flex justify-center gap-5 mt-3">
                <div className="hidden md:w-1/6"></div>
                <div className="w-full md:w-1/6"> {/* The first column */}
                   <div className="mb-7">
                        <div className="flex justify-center">
                            <img src={LogoImage} alt="Hình logo trang web" 
                                className="mb-3"
                            />    
                        </div>                        
                        <p className="text-center text-lg">Bất động sản K&M</p>
                   </div>
                   <div className="text-left">
                        <p className="font-bold text-lg mb-3">Liên hệ</p>
                        <div className="flex gap-2 mb-3">
                            <img 
                                src={PhoneIcon} 
                                alt="Icon điện thoại liên hệ"
                                className="mt-1 w-10 h-10"
                            />
                            <div className="block">
                                <p>Số điện thoại</p>
                                <p className="font-bold">90001080</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img 
                                src={EmailIcon} 
                                alt="Icon điện thoại liên hệ"                                
                                className="mt-1 w-10 h-10"                        
                            />
                            <div className="block">
                                <p>Email</p>
                                <p className="font-bold">K&M.BDS@gmail.com</p>
                            </div>
                        </div>
                   </div>
                </div>

                <div className="md:w-1/6"> {/* The second column */}
                    <p className="font-bold mb-8">Về WTL.com.vn</p>
                    <ul className="list-disc">
                        <li className="mb-2 lg:mb-6">
                            <p>Giới thiệu</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Quy định sử dụng</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Quy định đăng tin</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Điều khoản thỏa thuận</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Giải quyết khiếu nại</p>
                        </li>
                    </ul>
                </div>

                <div className="md:w-1/6"> {/* The third column */}
                    <p className="font-bold mb-8">Hỗ trợ khách hàng</p>
                    <ul className="list-disc">
                        <li className="mb-2 lg:mb-6">
                            <p>Tin tức & Khuyến mại</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Hướng dẫn đăng tin</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Bảng giá dịch vụ</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Câu hỏi thường gặp</p>
                        </li>
                        <li className="mb-2 lg:mb-6">
                            <p>Góp ý báo lỗi</p>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/6"> {/* The fourth column */}
                    <p className="font-bold mb-3">Kết nối với chúng tôi</p>    
                    <div className="flex gap-3 ml-2 mb-8">
                        <img 
                            src={FacebookIcon} 
                            alt="Hình nền phương thức kết nối" 
                            width={30}
                            height={30}
                        />
                        <img 
                            src={YoutubeIcon} 
                            alt="Hình nền phương thức kết nối" 
                            width={30}
                            height={30}
                        />
                        <img 
                            src={ZaloIcon} 
                            alt="Hình nền phương thức kết nối" 
                            width={30}
                            height={30}
                        />
                        <img 
                            src={Linkedin} 
                            alt="Hình nền phương thức kết nối" 
                            width={30}
                            height={30}
                        />
                    </div>
                    <p className="font-bold mb-3">Phương thức thanh toán</p>
                    <div className="flex">
                        <div className="block"> { /*Visa & Momo*/ }
                            <img 
                                src={VisaIcon} 
                                alt="Hình nền phương thức thanh toán" 
                                width={90}
                                height={90}
                            />
                            <img 
                                src={MomoIcon} 
                                alt="Hình nền phương thức thanh toán" 
                                width={90}
                                height={90}
                            />
                        </div>
                        <div> { /* Mastercard & JCB*/ }
                            <img 
                                src={MastercardIcon} 
                                alt="Hình nền phương thức thanh toán" 
                                width={90}
                                height={90}
                            />
                            <img 
                                src={JCBIcon} 
                                alt="Hình nền phương thức thanh toán" 
                                width={90}
                                height={90}
                            />
                        </div>
                        <div> { /*PayPal & Cash*/ }
                            <img 
                                src={PaypalIcon} 
                                alt="Hình nền phương thức thanh toán" 
                                width={90}
                                height={90}
                            />
                            <img 
                                src={CashIcon} 
                                alt="Hình nền phương thức thanh toán" 
                                width={90}
                                height={90}
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden md:w-1/6"></div>
            </div> 
            <div>
                
            </div>     
        </div>
    );
};

export default Footer;