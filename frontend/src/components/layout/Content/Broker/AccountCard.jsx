import { Link } from  'react-router-dom';
import TrashIcon from '../../../../images/icons/trash.png';

const AccountCard = (props) => {
    return (
        <div className="flex flex-wrap border rounded-t rounded-lg mx-20 my-3 md:mx-28 lg:mx-5 xl:mx-1">
            <div className='w-full flex justify-center gap-3'>
                <img 
                    src={props.img}
                    alt="Ảnh đại diện" 
                    className="rounded-xl w-36 h-32"
                />

                <button className='flex items-end'>
                    <img src={TrashIcon} alt="Icon thùng rác" className='w-12 h-12 hover:bg-yellow-300 rounded-xl'/>
                </button>                            
            </div>

            <div className='w-full flex-row justify-start'>
                <div className='flex-row space-y-3 ml-5 mt-3'>
                    <p className='text-lg font-bold'>{props.account_name}</p>
                    <p className='text-lg italic line-clamps-1'>{props.address}</p>
                    <p className='text-lg'> <span className='italic'>Điện thoại: </span> {props.phone}</p>
                    <p className='text-lg'> <span className='italic'>Tổng tin đăng: </span> {props.total_posts}</p>
                    <p className='text-lg'> <span className='italic'>Tài khoản: </span> {props.account_type}</p>
                    <p className='text-lg'> <span className='italic'>Ngày nâng cấp: </span> {props.date_bought}</p>
                </div>                
                <Link
                    to={`/author-viewer/${props.id}`} 

                >
                    <p className="py-3 text-end underline italic mr-5">Xem chi tiết</p>
                </Link>
            </div>            
        </div>
    );
};
export default AccountCard;