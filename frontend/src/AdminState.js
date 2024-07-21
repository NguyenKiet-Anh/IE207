import { createContext, useState, useContext } from "react";

const AdminState = createContext();

export const AdminProvider = ( {children} ) => {
    // Variables
    const [isInAdminPage, setIsAdminPage] = useState(false);

    // Functions
    const adminPageActive = () => {
        setIsAdminPage(true);
    };

    const adminPageDeactive = () => {
        setIsAdminPage(false);
    };

    // Return render
    return (
        <AdminState.Provider value={{isInAdminPage, adminPageActive, adminPageDeactive }}>
            {children}
        </AdminState.Provider>
    );

};

export const useAdmin = () => useContext(AdminState);