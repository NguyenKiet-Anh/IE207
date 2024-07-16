import React from "react";

function Filter() {
    return (
        <div className="mt-3 ml-10 mr-10 py-2 border-b border-slate-300">   {/* Navbar for filtering, only appears with 'Nhà đất bán' and 'Nhà đất cho thuê' */}            
            <div className="flex gap-3 pb-3">
                <input 
                    d="search-bar" 
                    type="text" 
                    placeholder="   Tìm kiếm tin..."
                    className="w-4/5 h-10 rounded rounded-xl border border-black"
                />
                <button
                    className="w-2/5 md:w-1/5 px-2 font-bold text-white bg-red-500 rounded rounded-md"
                >
                    Tìm kiếm
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-5 md:gap-7 xl:gap-12">
                <select 
                    name="estate-type" 
                    id="estate-type-option"
                    className="w-1/7 h-8 rounded rounded-lg bg-gray-200"
                >
                    <option value="default">Loại nhà</option>
                </select>

                <select 
                    name="district" 
                    id="district-option"
                    className="w-1/7 h-8 rounded rounded-lg bg-gray-200"
                >
                    <option value="default">Quận</option>
                </select>

                <select 
                    name="estate-area" 
                    id="estate-area-option"
                    className="w-1/7 h-8 rounded rounded-lg bg-gray-200"
                >
                    <option value="default">Diện tích</option>
                </select>

                <select 
                    name="estate-price" 
                    id="estate-price-option"
                    className="w-1/7 h-8 rounded rounded-lg bg-gray-200"
                >
                    <option value="default">Số phòng</option>
                </select>
                
                <button className="w-1/7 h-8 ml-5 px-2 bg-red-300 text-white font-bold rounded rounded-lg">
                    Đặt lại
                </button>
            </div>
        </div>
    );
};

export default Filter;