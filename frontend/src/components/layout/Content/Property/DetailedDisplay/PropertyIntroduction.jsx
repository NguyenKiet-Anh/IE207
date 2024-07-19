import LocationIcon from '../../../../../images/icons/location.png';
import { Link } from 'react-router-dom';

const PropertyIntroduction = ({ property }) => {
    return (
        <div className='pb-5'>
            <div className="flex flex-wrap justify-between">  {/* Images */}
                <div className="w-2/3 flex items-center my-1 lg:my-34">
                    <img src={property.img} alt="Hình ảnh 1" className='w-full h-60 lg:h-80 rounded-xl'/>
                </div>
                <div className="w-1/3 my-1 lg:my-34 flex flex-wrap">
                    <div className='mx-5 w-full'>
                        <div className='flex justify-center'>
                            <img src={property.img} alt="Hình ảnh 2" className='w-44 h-20 lg:h-24 rounded-xl'/>
                        </div>   
                        <div className='flex justify-center'>
                            <img src={property.img} alt="Hình ảnh 3" className='w-44 h-20 lg:h-24 my-1 lg:my-4 rounded-xl'/>
                        </div>                             
                        <div className='flex justify-center'>  
                            <img src={property.img} alt="Hình ảnh 4" className='w-44 h-20 lg:h-24 rounded-xl'/>
                        </div>                                        
                    </div>
                </div>
            </div> 

            <div className="flex flex-wrap pt-8"> { /*Title & adress & price & author*/ }
                <div className="w-4/6">
                    <p className='font-bold text-xl'>{property.title}</p>

                    <div className="flex my-5 gap-1">
                        <img 
                            src={LocationIcon} 
                            alt="Icon vị trí" 
                            className='w-8 h-8'    
                        />
                        <p className='italic'>{property.address}</p>
                    </div>
                    
                    <p className='font-bold text-lg text-red-500'>{property.price}</p>
                </div>
                
                <div className="w-2/6 flex justify-center">
                    <div className='w-2/3 sm:w-1/2 bg-slate-300 rounded-xl shadow-lg'>
                        <Link 
                        to={`/author-viewer/${property.author_id}`}
                        >
                            <div className='my-2 flex justify-center'>
                                <img 
                                    src={property.author_img} 
                                    alt="Icon avatar người đại diện"
                                    className='w-10 h-15 rounded-3xl'
                                />
                            </div>

                            <div className='flex justify-center'>
                                <p className='font-bold'>{property.author_name}</p>
                            </div>

                            <div className='flex justify-center my-2'>                        
                                <p className='italic'>{property.update}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='my-5 mr-5'> { /*About*/ }
                <p>{property.about}</p>
            </div>
        </div>
    );
};
export default PropertyIntroduction;