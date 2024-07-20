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
                        <p className="line-clamp-3 2xl:line-clamp-4">{props.content}</p>
                    </div>
                    <div className="pr-5 2xl:pt-5 flex justify-end">
                        <a href="" className="hover:text-blue-500">
                            <p className="italic underline">Xem chi tiết</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewsList;