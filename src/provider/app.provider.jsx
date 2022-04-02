import React, {createContext, useContext, useReducer} from "react";
import englishText from "../assets/translation/en.js";
import arabicText from "../assets/translation/ar.js";

export const AppContext = createContext({
    department: null,
    lang: "Ar",
    text: arabicText,
});

const appReducer = (state, action) => {
    switch (action.type) {
        case "department": {
            return {
                ...state,
                department: action.data,
            };
        }
        case "en": {
            return {
                ...state,
                lang: "En",
                text: englishText,
            };
        }
        case "ar": {
            return {
                ...state,
                lang: "Ar",
                text: arabicText,
            };
        }
        default: {
            return state;
        }
    }
};

const AppProvider = ({children}) => {
    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(appReducer, {
        department: null,
        lang: "Ar",
        text: arabicText,
    });
    // noinspection JSValidateTypes
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("AppProvider");
    }
    return context;
};

export {AppProvider, useApp};
