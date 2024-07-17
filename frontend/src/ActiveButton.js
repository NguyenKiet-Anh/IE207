import { createContext, useState, useContext } from "react";

const ActiveButtonContext = createContext();

export const ActiveProvider = ({children}) => {
    // 
    const [isWishListActived, setIsWishListActived] = useState(false);
    const [isAccountActived, setAccountIsActived] = useState(false);
    // WishList
    const wishListActive = () => {
        setIsWishListActived(true)
    };

    const wishListDeactive = () => {
        setIsWishListActived(false)
    };
    // Account
    const accountActive = () => {
        setAccountIsActived(true)
    };

    const accountDeactive = () => {
        setAccountIsActived(false)
    }; 
    // 
    return (
        <ActiveButtonContext.Provider value={{ 
            isWishListActived, 
            setIsWishListActived, 
            wishListActive, 
            wishListDeactive, 
            isAccountActived,
            setAccountIsActived,
            accountActive,
            accountDeactive
            }}>
            {children}
        </ActiveButtonContext.Provider>
    );
};

export const ActiveButton = () => useContext(ActiveButtonContext);