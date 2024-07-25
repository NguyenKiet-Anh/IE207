import AddFavouriteIcon from '../../../../images/icons/add-favourite.png';
import RemoveFavouriteIcon from '../../../../images/icons/remove-wishlist.png';
import BedRoomIcon from '../../../../images/icons/bed.png';
import BathRoomIcon from '../../../../images/icons/bath.png';
import Acreageicon from '../../../../images/icons/acreage.png';
import YesIcon from '../../../../images/icons/yes.png';
import FurnitureIcon from '../../../../images/icons/furniture.png';
import policyIcon from '../../../../images/icons/policy.png';
import LocationIcon from '../../../../images/icons/location.png';
import TrashIcon from '../../../../images/icons/trash.png';

import { useAdmin } from '../../../../AdminState';  
import { ActiveButton } from '../../../../ActiveButton';
import { Link } from 'react-router-dom';

const PropertyCard = (props) => {
    // Functions here
    const { isWishListActived } = ActiveButton();
    const { isInAdminPage } = useAdmin();
    
    const handleClick = () => {
        props.onCardClick();
    }
    // Render here
    return (
        <div className="flex flex-wrap rounded-lg my-6 border shadow-lg" onClick={handleClick}>
            <div className="w-1/3">
                <img 
                    src={props.img}
                    alt="Hình nhà - 1 hình" 
                    className='h-full rounded-r rounded-lg'
                />
            </div>

            <div className="w-2/3 pl-1">

                <div className="flex flex-wrap items-center my-1"> { /* Row for title and price */ }
                    <p className='w-3/6 font-bold text-md lg:text-lg xl:text-xl'>{props.title}</p>
                    <p className='w-2/6 font-bold text-md lg:text-lg xl:text-xl text-red-500 text-center'>{props.price}</p>
                    {/* {isWishListActived? (
                        <button className='w-1/6 flex justify-center'>
                            <img 
                                src={RemoveFavouriteIcon}
                                alt="Icon thêm tin vào danh sách quan tâm" 
                                className='w-10 h-10 hover:bg-red-400 hover:rounded-md'
                            />
                        </button>
                    ) : (
                        <button className='w-1/6 flex justify-center'>
                            <img 
                                src={AddFavouriteIcon}
                                alt="Icon thêm tin vào danh sách quan tâm" 
                                className='w-10 h-10 hover:bg-red-400 hover:rounded-md'
                            />
                        </button>
                    )} */}
                    
                    {isWishListActived &&
                        <button className='w-1/6 flex justify-center'>
                            <img 
                                src={RemoveFavouriteIcon}
                                alt="Icon thêm tin vào danh sách quan tâm" 
                                className='w-10 h-10 hover:bg-red-400 hover:rounded-md'
                            />
                        </button>
                    }
                    {!isWishListActived && !isInAdminPage &&
                        <button className='w-1/6 flex justify-center'>
                            <img 
                                src={AddFavouriteIcon}
                                alt="Icon thêm tin vào danh sách quan tâm" 
                                className='w-10 h-10 hover:bg-red-400 hover:rounded-md'
                            />
                        </button>
                    }
                    {!isWishListActived && isInAdminPage &&
                        <button className='w-1/6 flex justify-center'>
                            <img 
                                src={TrashIcon}
                                alt="Icon thêm tin vào danh sách quan tâm" 
                                className='w-10 h-10 hover:bg-red-400 hover:rounded-md'
                            />
                        </button>
                    }
                    
                </div>

                <div className='flex mx-3 lg:my-5 xl:my-8'> { /* Row for address */ }
                    <img 
                        src={LocationIcon} 
                        alt="Icon vị trí" 
                        className='w-5 h-5 xl:w-7 xl:h-7'
                    />
                    <p className='text-sm lg:text-md xl:text-lg italic'>{props.address}</p>
                </div>                

                <div className="flex flex-wrap justify-between items-center ml-4 xl:mr-20 my-4"> { /* Row for features */ }
                    <div className='flex items-center justify-start'>
                        <img 
                            src={Acreageicon} 
                            alt="Icon cho diện tích" 
                            className='w-6 h-6 lg:h-8 xl:w-8 '
                        />
                        <p className='text-md lg:text-lg'>{props.area}</p>                    
                    </div>                    
                    
                    <div className='flex gap-1 lg:gap-2 items-center justify-start'>
                        <img 
                            src={BedRoomIcon} 
                            alt="Icon phòng ngủ" 
                            className='w-6 h-6 lg:h-8 xl:w-8'
                        />
                        <p className='text-md lg:text-lg'>{props.bedroom}</p>
                    </div>

                    <div className='flex gap-1 lg:gap-2 items-center justify-start'>
                        <img 
                            src={BathRoomIcon} 
                            alt="Icon phòng tắm" 
                            className='w-6 h-6 lg:h-8 xl:w-8'
                        />
                        <p className='text-md lg:text-lg'>{props.bathroom}</p>
                    </div>

                    <div className='flex gap-1 lg:gap-2 items-center justify-start'>
                        <img 
                            src={FurnitureIcon} 
                            alt="Icon nội thất" 
                            className='w-6 h-6 lg:h-8 xl:w-8'
                        />
                        <p className='text-md lg:text-lg'>{props.furniture}</p>
                    </div>

                    <div className='flex gap-1 lg:gap-2 items-center justify-start mr-2'>
                        <img 
                            src={policyIcon} 
                            alt="Icon pháp lý" 
                            className='w-7 h-7 lg:h-9 xl:w-9'
                        />
                        <p className='text-md lg:text-lg'>{props.policy}</p>
                    </div>

                </div>
                
                <div className="flex xl:h-1/5 xl:items-end ml-2 lg:mb-5"> { /* Row for date and see detailed informtion */ }
                    <div className='w-1/2 flex items-center'>
                        <p className='text-sm lg:text-md'>Ngày đăng: <span className='italic'>{props.update}</span></p>
                        {/* <div className='w-1/3 my-1'>
                            <img 
                            src={props.author_img}
                            alt="Hình đại diện người đăng" 
                            className='h-full rounded rounded-l-lg'
                        />
                        </div>
                        <div className='w-2/3 flex flex-wrap lg:ml-1'>
                            <p className='font-bold my-2'>{props.author_name}</p>
                            <p className='italic'>{props.date}</p>
                        </div> */}
                    </div> 


                    {/* <button className='flex w-1/5 lg:w-2/5 lg:mx-1 justify-end items-center'>
                        <div className='flex flex-wrap bg-red-500 py-1 pl-1 lg:p-2 rounded-xl'>
                            <img 
                                src={PhoneIcon} 
                                alt="Icon điện thọai" 
                                className='h-6'
                            />
                            <p className='ml-1 font-bold text-white'>{props.phone}</p>
                        </div>
                    </button> */}

                    <div className='flex w-1/2 items-center justify-end mr-3'>
                        {props.kind === 0? (
                            <Link
                                to={`/detailed-property/sale/${props.id}/${props.kind}`}
                            >
                                <div                             
                                    className='text-sm lg:text-md xl:text-lg text-red-500 font-bold underline'
                                > { /* Send id to the router link - then load data as the received id */ }
                                    <p>Xem chi tiết &gt;</p>
                                </div>
                            </Link>
                        ) : (
                            <Link
                                to={`/detailed-property/rent/${props.id}/${props.kind}`}
                            >
                                <div                             
                                    className='text-sm lg:text-md xl:text-lg text-red-500 font-bold underline'
                                > { /* Send id to the router link - then load data as the received id */ }
                                    <p>Xem chi tiết &gt;</p>
                                </div>
                            </Link>
                        )}                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;