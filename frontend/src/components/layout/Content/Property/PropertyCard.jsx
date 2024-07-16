import AddFavouriteIcon from '../../../../images/icons/add-favourite.png';
import BedRoomIcon from '../../../../images/icons/bed.png';
import BathRoomIcon from '../../../../images/icons/bath.png';
import PhoneIcon from '../../../../images/icons/smartphone.png';

const PropertyCard = (props) => {
    return (
        <div className="flex flex-wrap items-center">
            <div className="w-1/3">
                <img 
                    src={props.img}
                    alt="Hình nhà - 1 hình" 
                    className='rounded rounded-3xl'    
                />
            </div>
            <div className="w-2/3 pl-1">
                <div className="flex flex-wrap items-center mb-2">
                    <p className='w-3/6 font-bold text-xl'>{props.title}</p>
                    <p className='w-2/6 font-bold text-lg text-red-500 text-center'>{props.price}</p>
                    <button className='w-1/6 flex justify-center'>
                        <img 
                            src={AddFavouriteIcon}
                            alt="Icon thêm tin vào danh sách quan tâm" 
                            className='w-10 h-10 hover:bg-red-500 hover:rounded-md'
                        />
                    </button>
                </div>
                <p className='mx-2 text-lg'>{props.address}</p>
                <div className="flex items-center gap-5 m-4">
                    <p className='font-bold text-red-500 text-lg lg:text-xl'>{props.area} m^2</p>                    
                    
                    <div className='flex gap-2 py-2 px-4 bg-gray-300 rounded rounded-2xl'>
                        <img 
                            src={BedRoomIcon} 
                            alt="Icon phòng ngủ" 
                            className='h-6'
                        />
                        <p className='font-bold'>{props.bedroom} Phòng ngủ</p>
                    </div>

                    <div className='flex gap-2 py-2 px-4 bg-gray-300 rounded rounded-2xl'>
                        <img 
                            src={BathRoomIcon} 
                            alt="Icon phòng tắm" 
                            className='h-6'
                        />
                        <p className='font-bold'>{props.bathroom} Phòng tắm</p>
                    </div>
                </div>
                <div className="flex lg:pt-12">
                    <div className='w-2/5 flex'>
                        <div className='w-1/3 my-1'>
                            <img 
                            src={props.author_img}
                            alt="Hình đại diện người đăng" 
                            className='h-full rounded rounded-l-lg'
                        />
                        </div>

                        <div className='w-2/3 block'>
                            <p className='font-bold mt-2 mb-10'>{props.author_name}</p>
                            <p>{props.date}</p>
                        </div>
                    </div> 

                    <div className='w-1/5'></div>

                    <button className='flex w-1/5 mx-8 lg:mx-1 justify-end items-center'>
                        <div className='bg-red-500 p-2 rounded-xl'>
                            <img 
                                src={PhoneIcon} 
                                alt="Icon điện thọai" 
                                className='h-6'
                            />
                            <p className='font-bold text-white'>{props.phone}</p>
                        </div>
                    </button>

                    <div className='flex w-1/5 justify-center items-center'>                     
                        <a href="" className='text-red-500 font-bold underline'>
                            <p>Xem chi tiết &gt;</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;