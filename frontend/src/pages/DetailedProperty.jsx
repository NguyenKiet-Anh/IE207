import { Fragment } from 'react';
import PropertyInformation from '../components/layout/Content/Property/DetailedDisplay/PropertyInformation';
import PropertyIntroduction from '../components/layout/Content/Property/DetailedDisplay/PropertyIntroduction';
import RelativeProperty from "../components/layout/Content/Property/DetailedDisplay/RelativeProperty";

const DetailedProperty = ( {property} ) => {
    console.log(property);
    return (
            <Fragment>
                <div className='flex flex-wrap justify-center'> { /* for introduction and information*/ }
                    <div className='bg-green-500 w-full lg:w-3/6'>
                        <PropertyIntroduction></PropertyIntroduction>
                    </div>
                    <div className='w-full lg:w-1/6'>                        
                        <PropertyInformation></PropertyInformation>
                    </div>
                </div>

                <div className='flex justify-center'> {/* for relative property */}
                    <div className='w-full lg:w-2/3 bg-yellow-500'>
                        <RelativeProperty></RelativeProperty>
                    </div>
                </div>
            </Fragment>
    );
};
export default DetailedProperty;