import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyInformation from '../components/layout/Content/Property/DetailedDisplay/PropertyInformation';
import PropertyIntroduction from '../components/layout/Content/Property/DetailedDisplay/PropertyIntroduction';
import RelativeCarousel from "../components/layout/Content/Property/DetailedDisplay/RelativeProperty";

import CardDataForSale from '../assets/EstateForSale/EstateForSaleCardData';
import CardDataForRent from '../assets/EstateForRent/EstateForRentCardData';

const DetailedProperty = () => {
    // Params here
    const { kind, propertyId } = useParams();
    const [propertydata, setPropertyData] = useState([]);

    // Functions here
    useEffect(() => {
            const getPropertyAsId = async () => {
                for (let i=0; i < CardDataForSale.length; i++)
                {   
                    if (parseInt(kind) === parseInt(0)) {                    
                        if (CardDataForSale[i].id === parseInt(propertyId))
                        {   
                            setPropertyData(CardDataForSale[i])
                            break
                        }
                    } 
                    else if (parseInt(kind) === parseInt(1)) {
                        if (CardDataForRent[i].id === parseInt(propertyId))
                        {   
                            setPropertyData(CardDataForRent[i])
                            break
                        }
                    }                               
                }
            }             
            getPropertyAsId();
        }, []);

    // Render here
    return (
            <Fragment>
                <div className='flex flex-wrap justify-center'> { /* for introduction and information*/ }
                    <div className='w-full lg:w-3/6'>
                        <PropertyIntroduction property={propertydata}></PropertyIntroduction>
                    </div>
                    <div className='w-full lg:w-2/6'>                        
                        <PropertyInformation property={propertydata}></PropertyInformation>
                    </div>
                </div>

                <div className='flex justify-center'> {/* for relative property */}
                    <div className='w-full lg:w-5/6'>
                        <RelativeCarousel></RelativeCarousel>
                    </div>
                </div>
            </Fragment>
    );
};
export default DetailedProperty;