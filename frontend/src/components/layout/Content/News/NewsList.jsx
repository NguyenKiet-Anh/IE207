const NewsList = (props) => {
    return (
        <div className="flex flex-wrap border-b border-black">
            <div className="w-1/3 flex items-center">
                <img 
                    src={props.img} 
                    alt="Ảnh đại diện cho tin" 
                    className="h-full py-3"
                />
            </div>
            <div className="w-2/3">
                <div className="ml-3">
                    <p className="py-2 text-sm italic">{props.timestamp} - {props.author}</p>
                    <p className="font-bold text-xl py-5">{props.title}</p>
                    <p className="py-3">{props.content}</p>
                </div>
            </div>
        </div>
    );
};
export default NewsList;