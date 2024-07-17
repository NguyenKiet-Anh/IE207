const PropertyIntroduction = (props) => {
    return (
        <div>
            <div className="flex flex-wrap">  {/* Images */}
                <div className="w-2/3">
                    <img src="" alt="Hình ảnh 1" />
                </div>
                <div className="w-1/3">
                    <img src="" alt="Hình ảnh 2" />
                    <img src="" alt="Hình ảnh 3" />
                    <img src="" alt="Hình ảnh 4" />
                </div>
            </div> 

            <div className="flex flex-wrap"> { /*Title & adress & price*/ }
                <div className="w-3/4">
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </div>
                <div className="w-1/4">
                    <img src="" alt="Icon avatar người đại diện" />
                    <p>b</p>
                    <p>b</p>
                </div>
            </div>

            <div> { /*About*/ }
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequatur itaque aspernatur necessitatibus dignissimos mollitia nisi fugit neque praesentium animi odit accusamus, quibusdam excepturi! Ducimus nisi quibusdam error quisquam adipisci!</p>
            </div>
        </div>
    );
};
export default PropertyIntroduction;