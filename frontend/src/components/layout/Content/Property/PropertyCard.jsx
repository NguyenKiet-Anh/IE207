import AddFavouriteIcon from '../../../../images/icons/add-favourite.png';
import BedRoomIcon from '../../../../images/icons/bed.png';
import BathRoomIcon from '../../../../images/icons/bath.png';
import PhoneIcon from '../../../../images/icons/smartphone.png';
import Acreageicon from '../../../../images/icons/acreage.png';

const PropertyCard = (props) => {
    return (
        <div className="flex flex-wrap rounded-3xl my-6 hover:bg-slate-200">
            <div className="w-1/3">
                <img 
                    src={props.img}
                    alt="Hình nhà - 1 hình" 
                    className='h-full rounded-r rounded-3xl'
                />
            </div>
            <div className="w-2/3 pl-1">
                <div className="flex flex-wrap items-center my-3">
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

                <p className='mx-2 my-2 lg:my-5 text-lg italic'>{props.address}</p>

                <div className="flex items-center gap-5 lg:gap-16 mx-4 my-3">
                    <div className='flex gap-1 lg:gap-2 items-center justify-start rounded rounded-2xl'>
                        <img 
                            src={Acreageicon} 
                            alt="Icon cho diện tích" 
                            className='lg:h-8'
                        />
                        <p className='font-bold text-red-400 text-lg lg:text-xl'>{props.area}</p>                    
                    </div>                    
                    
                    <div className='flex gap-1 lg:gap-2 items-center justify-start rounded rounded-2xl'>
                        <img 
                            src={BedRoomIcon} 
                            alt="Icon phòng ngủ" 
                            className='h-6 lg:h-8'
                        />
                        <p className='text-lg'>{props.bedroom}</p>
                    </div>

                    <div className='flex gap-1 lg:gap-2 items-center justify-start rounded rounded-2xl'>
                        <img 
                            src={BathRoomIcon} 
                            alt="Icon phòng tắm" 
                            className='h-6 lg:h-8'
                        />
                        <p className='lg:text-lg'>{props.bathroom}</p>
                    </div>
                </div>
                
                <div className="flex">
                    <div className='w-2/5 flex pr-8'>
                        <div className='w-1/3 my-1'>
                            <img 
                            src={props.author_img}
                            alt="Hình đại diện người đăng" 
                            className='h-full rounded rounded-l-lg'
                        />
                        </div>

                        <div className='w-2/3 flex flex-wrap lg:ml-1'>
                            <p className='font-bold my-2'>{props.author_name}</p>
                            <p className='italic'>{props.date}</p>
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

                    <div className='flex w-2/5 sm:w-1/5 items-center md:px-1 lg:px-3'>                     
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