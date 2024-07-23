const FeatureCard = (feature_data) => {
    return (
        <div className="bg-red-400 w-1/4 flex flex-wrap gap-2 px-3 py-2 rounded-xl justify-center md:justify-start items-center">
            <img 
                src={feature_data.img}
                alt="Icon cho feature" 
                className="w-20 h-16"
            />
            <p className="font-bold text-white">{feature_data.feature_name}</p>
        </div>
    );
};
export default FeatureCard;