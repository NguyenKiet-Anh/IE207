const NewsList = (props) => {
    return (
        <div className="border-b border-black">
            <div className="flex flex-wrap my-3">
                <div className="w-1/3">
                    <img 
                        src={props.img} 
                        alt="Ảnh đại diện cho tin" 
                        className="h-fit py-3"
                    />
                </div>
                <div className="w-2/3">
                    <div className="ml-3">
                        <p className="text-sm italic">{props.timestamp} - {props.author}</p>
                        <p className="font-bold text-xl">{props.title}</p>
                        <p className="line-clamp-3">{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewsList;