import LocationIcon from '../../../../../images/icons/location.png';

const PropertyIntroduction = (props) => {
    return (
        <div>
            <div className="flex flex-wrap">  {/* Images */}
                <div className="w-2/3">
                    <img src={props.img} alt="Hình ảnh 1" />
                </div>
                <div className="w-1/3">
                    <img src={props.img} alt="Hình ảnh 2" />
                    <img src={props.img} alt="Hình ảnh 3" />
                    <img src={props.img} alt="Hình ảnh 4" />
                </div>
            </div> 

            <div className="flex flex-wrap"> { /*Title & adress & price*/ }
                <div className="w-3/4">
                    <p>{props.title}</p>

                    <div className="flex gap-2">
                        <img 
                            src={LocationIcon} 
                            alt="Icon vị trí" 
                            className='w-8 h-8'    
                        />
                        <p>{props.adress}</p>
                    </div>
                    
                    <p>{props.price}</p>
                </div>
                <div className="w-1/4">
                    <img src={props.author_img} alt="Icon avatar người đại diện" />
                    <p>{props.author_name}</p>
                    <p>{props.update}</p>
                </div>
            </div>

            <div> { /*About*/ }
                <p>{props.about}</p>
            </div>
        </div>
    );
};
export default PropertyIntroduction;