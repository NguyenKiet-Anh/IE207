import React, { createContext,useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // Create component for login state
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    // Create functions for providers
    const login = (userData) => {
        setIsLoggedIn(true)
        setUserInfo(userData)
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUserInfo({})
    }
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, isAdmin, userInfo, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);



