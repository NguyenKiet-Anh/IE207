const TopView = (props) => {    
    return (
        <div className="py-2">
            <div className="flex flex-wrap items-center bg-red-300 rounded rounded-lg px-2 ml-5 shadow">
                <div className="w-1/5 text-center text-red-500 font-bold">{props.order + 1}</div>
                <div className="w-4/5 line-clamp-2">{props.title}</div>
            </div>        
        </div>        
    );
};

export default TopView;