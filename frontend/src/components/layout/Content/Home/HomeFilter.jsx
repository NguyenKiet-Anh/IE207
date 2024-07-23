
const HomeFilter = () => {
    return (
        <div className="bg-slate-700 rounded-2xl px-3 space-y-4 py-4">
            <div className="flex justify-start gap-3">
                <button className="w-1/5 p-2 bg-white rounded">
                    <p className="line-clamp-1 font-bold">Nhà đất cho thuê</p>
                </button>
                <button className="w-1/5 p-2 bg-white rounded">
                    <p className="line-clamp-1 font-bold">Nhà đất bán</p>
                </button>                                
            </div>

            <div className="flex justify-center gap-2">
                <div className="w-5/6 mr-2">
                    <input 
                        type="text" 
                        placeholder="   Nhập thông tin tìm kiếm ..."
                        className=" w-full py-3 rounded-md"
                    />
                </div>                
                <button className="w-1/6">
                    <p className="py-3 font-bold text-white bg-red-500 rounded-md line-clamp-1">Tìm kiếm</p>
                </button>
            </div>

            <div className="flex justify-between gap-3">
                <select 
                    name="home-filter-select" 
                    id="home-filter-select"
                    className="w-1/3 p-1 rounded"
                >
                    <option value="default">Quận</option>
                </select>

                <select 
                    name="home-filter-select" 
                    id="home-filter-select"
                    className="w-1/3 p-1 rounded"
                >
                    <option value="default">Loại nhà đất</option>
                </select>

                <select 
                    name="home-filter-select" 
                    id="home-filter-select"
                    className="w-1/3 p-1 rounded"
                >
                    <option value="default">Mức giá</option>
                </select>
            </div>
        </div>
    );
    
};
export default HomeFilter;