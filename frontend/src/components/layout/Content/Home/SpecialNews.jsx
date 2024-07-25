const SpecialNews = (props) => {
    // Functions for identifying if a news has been clicked
    const onClick = () => {
        props.onNewsClick();
    }
    return (
        <div onClick={onClick} className="flex gap-2">
            <p className="hover:underline cursor-pointer line-clamp-1 lg:text-lg">{props.title}</p>
            <p className="italic lg:text-lg line-clamp-1">- {props.author}</p>
        </div>
    );
};
export default SpecialNews;