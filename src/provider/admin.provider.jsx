import React, {createContext, useContext, useReducer} from "react";

export const AdminContext = createContext({
    admin: null,
    loading: true,
});

const adminReducer = (state, action) => {
    switch (action.type) {
        case "admin": {
            return {
                ...state,
                admin: action.data,
                loading: false,
            };
        }
        case "loading": {
            return {
                ...state,
                loading: action.data,
            };
        }
        default: {
            return state;
        }
    }
};

const AdminProvider = ({children}) => {
    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(adminReducer, {
        admin: null,
        loading: true,
    });
    // noinspection JSValidateTypes
    return (
        <AdminContext.Provider value={{state, dispatch}}>
            {children}
        </AdminContext.Provider>
    );
};

const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error("AdminProvider");
    }
    return context;
};

export {AdminProvider, useAdmin};
