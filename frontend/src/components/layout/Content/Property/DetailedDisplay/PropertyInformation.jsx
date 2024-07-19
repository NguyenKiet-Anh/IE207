import YesIcon from '../../../../../images/icons/yes.png';
import NoIcon from '../../../../../images/icons/no.png';
import BedIcon from '../../../../../images/icons/bed.png';
import BathIcon from '../../../../../images/icons/bath.png';
import FurnitureIcon from '../../../../../images/icons/furniture.png';
import PhoneIcon from '../../../../../images/icons/detailed-phone.png';
import AddWishListIcon from '../../../../../images/icons/add-wishlist.png';

const PropertyInformation = ({ property }) => {
    return (
        <div className="bg-slate-300 rounded-lg py-5 shadow-xl"> { /**/ }
            <div className="bg-white mx-2 rounded-md py-2">
                <div className='mx-2'>
                    <p className="font-bold text-lg">Thông tin pháp lý</p>
                    <div className='mx-2 py-4'>
                        {property.policy? (
                            <div className='flex gap-2'>
                                <img src={YesIcon} alt="Icon có pháp lý" className='w-5 h-5'/>
                                <p>Pháp lý rõ ràng</p>
                            </div>
                        ): (
                            <div className="flex gap-2">
                                <img src={NoIcon} alt="Icon không có pháp lý" />
                                <p>Không có thông tin pháp lý</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white mx-2 my-5 rounded-md py-4 shadow-xl"> { /**/ }
                <div className='mx-2'>
                    <p className="font-bold text-lg">Thông tin bất động sản</p>
                    <p className='my-4 mx-1'>Diện tích: <span className='font-bold italic'> {property.area} m^2</span></p>

                    <div className='my-3'>
                        <div className='flex justify-start gap-2 py-1.5 ml-1 w-2/5 sm:w-3/5 lg:w-2/5 bg-slate-300 rounded-lg'>
                            <img src={BedIcon} alt="Icon phòng ngủ" className='ml-2'/>
                            <p className='font-bold'>{property.bedroom} Phòng ngủ</p>
                        </div>                        
                    </div>

                    <div className='my-3'>
                        <div className='flex justify-start gap-2 py-1.5 ml-1 w-2/5 sm:w-3/5 lg:w-2/5 bg-slate-300 rounded-lg'>
                            <img src={BathIcon} alt="Icon phòng tắm" className='ml-2'/>
                            <p className='font-bold'>{property.bathroom} Phòng tắm</p>
                        </div>                        
                    </div>

                    <div className='my-3'>
                        <div className='flex justify-start gap-2 py-1.5 ml-1 w-2/5 sm:w-3/5 lg:w-2/5 bg-slate-300 rounded-lg ml-2'>
                            <img src={FurnitureIcon} alt="Icon nội thất" className='ml-1'/> 
                            {property.furniture? (
                                <div>
                                    <p className='font-bold'>Gồm nội thất</p>
                                </div>
                            ) : (
                                <div>
                                    <p className='font-bold'>Không nội thất</p>
                                </div>
                            )}
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="mx-2 my-5"> { /**/ }
                <img src={property.map} alt="Hình ảnh bản đồ chi tiết" />
            </div>

            <div className="flex flex-wrap my-5 justify-between sm:justify-center mx-20 sm:mx-1 sm:gap-1 md:gap-6 lg:gap-14 xl:gap-24"> { /**/ }
                <button
                    className='bg-red-500 rounded-lg'
                >
                    <div className='flex items-center gap-2 p-2'>
                        <p className='font-bold text-white'>Lưu bài</p>
                        <img 
                            src={AddWishListIcon} 
                            alt="Icon lưu tin" 
                        />
                    </div>
                </button>

                <button className='bg-red-500 rounded-lg'>
                    <div className='flex items-center gap-2 p-1'>
                        <p className='font-bold text-white'>Gọi ngay</p>
                        <img 
                            src={PhoneIcon}
                            alt="Icon liên hệ" 
                        />
                    </div>                    
                </button>
            </div>
        </div>
    );
};
export default PropertyInformation;