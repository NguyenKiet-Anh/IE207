import BedIcon from "../../../../images/icons/bed.png";
import BathIcon from "../../../../images/icons/bath.png";
import { Link } from "react-router-dom";

const SmallPropertyCard = (property) => {
    return (
        <div className='pb-10 pt-2'>
            <div className="mx-2 border">
                <div className="h-56 md:h-64 flex justify-center">
                    <img 
                        src={property.img} 
                        alt="Hình ảnh nhà"
                        className="w-5/6 "
                    />
                </div>

                <p className='text-xl text-center'>{property.address}</p>

                <div className="flex flex-wrap py-4">
                    <div className='w-1/3'>
                        <div className='ml-5'>
                            <div className='flex justify-center'>
                                <img 
                                    src={property.author_img} 
                                    alt="Hình đại diện" 
                                    className='w-10 h-10 rounded-full'
                                />
                            </div>
                            <p className='font-bold text-center py-2'>{property.author_name}</p>
                            <p className='text-center line-clamp-2'>{property.update}</p>
                        </div>
                    </div>

                    <div className='w-2/3'>
                        <div className="flex flex-wrap justify-center gap-10">
                            <div className="flex gap-2 bg-slate-300 py-1 px-3 rounded-lg">
                                <img src={BedIcon} alt="Icon phòng ngủ" />
                                <p>{property.bedroom}</p>
                            </div>

                            <div className="flex gap-2 bg-slate-300 py-1 px-3 rounded-lg">
                                <img src={BathIcon} alt="Icon phòng tắm" />
                                <p>{property.bathroom}</p>
                            </div>  
                        </div>                  
                        <p className='font-bold text-xl text-center text-red-500 py-3'>{property.price}</p>
                            {property.kind === 0? (
                                <Link
                                    to={`/detailed-property/sale/${property.id}/${property.kind}`}
                                >
                                    <div                             
                                        className='text-sm lg:text-md xl:text-lg text-red-500 font-bold underline'
                                    > { /* Send id to the router link - then load data as the received id */ }
                                        <p className="text-red-500 underline text-center">Xem chi tiết &gt;</p>
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    to={`/detailed-property/rent/${property.id}/${property.kind}`}
                                >
                                    <div                             
                                        className='text-sm lg:text-md xl:text-lg text-red-500 font-bold underline'
                                    > { /* Send id to the router link - then load data as the received id */ }
                                        <p className="text-red-500 underline text-center">Xem chi tiết &gt;</p>
                                    </div>
                                </Link>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SmallPropertyCard;