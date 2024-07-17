const PropertyInformation = (props) => {
    return (
        <div className="bg-slate-300 rounded-lg">
            <div className="bg-white mx-2 "> { /**/ }
                <p>Thông tin pháp lý</p>
            </div>

            <div className="bg-white m-2"> { /**/ }
                <p>Thông tin bất động sản</p>
            </div>

            <div className="m-2"> { /**/ }
                Bản đồ
            </div>

            <div className="flex flex-wrap justify-center gap-8"> { /**/ }
                <button>a</button>
                <button>a</button>
            </div>
        </div>
    );
};
export default PropertyInformation;