import React, { createContext, useContext, useReducer } from "react";

export const CounterContext = createContext({
    number: 0,
});

const adminReducer = (state, action) => {
    switch (action.type) {
        case "increament": {
            return {
                number: state.number++,
            };
        }
        case "decreament": {
            return {
                number: state.number--,
            };
        }
        case "add": {
            return {
                number: state.number + action.data,
            };
        }
        case "minus": {
            return {
                number: state.number - action.data
            };
        }
        default: {
            return state;
        }
    }
};

const CounterProvider = ({ children }) => {
    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(adminReducer, {
        number: 0,
    });
    // noinspection JSValidateTypes
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

const useCounter = () => {
    const context = useContext(CounterContext);
    if (context === undefined) {
        throw new Error("AdminProvider");
    }
    return context;
};

export { CounterProvider, useCounter };
