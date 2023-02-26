import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const TYPES = {
  INVESTMENT: "INVESTMENT",
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
};

// initial State
const initialState = {
  transactions: [
    { id: 1, text: "Books", amount: 500, type: TYPES.EXPENSE },
    { id: 2, text: "Salary", amount: 55500, type: TYPES.INCOME },
    { id: 3, text: "Chocolate", amount: 50, type: TYPES.EXPENSE },
    { id: 4, text: "Stocks", amount: 5500, type: TYPES.INVESTMENT },
  ],
  colors: {
    INVESTMENT: "#facc15",
    INCOME: "#713f12",
    EXPENSE: "#581c87",
  },
};

// create Context
export const GlobalContext = createContext();

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(GlobalContext);
};
