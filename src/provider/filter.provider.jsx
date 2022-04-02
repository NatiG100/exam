import React, { createContext, useContext, useReducer } from "react";

const initialState = [
    {
        id: "0",
        text: "Smart Phones",
        selected: false
    },
    {
        id: "1",
        text: "Laptop",
        selected: false
    },
    {
        id: "2",
        text: "TV",
        selected: false
    },
    {
        id: "3",
        text: "Headphones",
        selected: false
    },
    {
        id: "4",
        text: "Speakers",
        selected: false
    },
    {
        id: "5",
        text: "Mouse",
        selected: false
    },
    {
        id: "6",
        text: "Keyboard",
        selected: false
    },
    {
        id: "7",
        text: "Other",
        selected: false
    },

];
export const FilterContext = createContext({
    filter: initialState
});

const filterReducer = (state, action) => {
    const data = action.data;
    switch (action.type) {
        case "toggle": {
            let oldState = state.filter[data.index];
            let newFilter = state.filter;
            newFilter.splice(data.index, 1, { ...oldState, selected: !oldState.selected });
            return {
                filter: newFilter
            };
        }
        default: {
            return state;
        }
    }
};

const FilterProvider = ({ children }) => {
    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(filterReducer, {
        filter: initialState
    });
    // noinspection JSValidateTypes
    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error("AdminProvider");
    }
    return context;
};

export { FilterProvider, useFilter };
