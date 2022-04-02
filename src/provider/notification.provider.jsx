import React, {createContext, useContext, useReducer} from "react";

export const NotificationContext = createContext({
    notifications: [],
});

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "notifications": {
            return {
                ...state,
                notifications: action.data,
            };
        }
        default: {
            return state;
        }
    }
};

const NotificationProvider = ({children}) => {
    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(notificationReducer, {
        notifications: [],
    });
    // noinspection JSValidateTypes
    return (
        <NotificationContext.Provider value={{state, dispatch}}>
            {children}
        </NotificationContext.Provider>
    );
};

const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error("NotificationProvider");
    }
    return context;
};

export {NotificationProvider, useNotification};
