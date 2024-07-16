const Map = (props) => {
    return (
        <div className="flex h-full justify-center items-center pb-20">
            <img src={props.map} alt="Hình ảnh bản đồ" className="rounded-lg"/>
        </div>
    );
};

export default Map;