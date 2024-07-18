import YesIcon from '../../../../../images/icons/yes.png';
import BedIcon from '../../../../../images/icons/bed.png';
import BathIcon from '../../../../../images/icons/bath.png';
import FurnitureIcon from '../../../../../images/icons/furniture.png';
import PhoneIcon from '../../../../../images/icons/detailed-phone.png';
import AddWishListIcon from '../../../../../images/icons/add-wishlist.png';

const PropertyInformation = ({ property }) => {
    return (
        <div className="bg-slate-300 rounded-lg py-5">
            <div className="bg-white mx-2 rounded-md py-2">
                <div className='mx-2'>
                    <p className="font-bold text-lg">Thông tin pháp lý</p>
                    <div className='mx-2 py-4'>
                        State here
                    </div>
                </div>
            </div>

            <div className="bg-white mx-2 my-5 rounded-md py-4"> { /**/ }
                <div className='mx-2'>
                    <p className="font-bold text-lg">Thông tin bất động sản</p>
                    <p className='my-4 mx-1'>Diện tích: <span className='italic'>{property.area} m^2</span></p>

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
                            <img src={FurnitureIcon} alt="Icon nội thất" /> 
                            State here     
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