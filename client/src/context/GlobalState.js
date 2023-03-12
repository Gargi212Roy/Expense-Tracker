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
    { id: 2, text: "Salary", amount: 55500, type: TYPES.INCOME },
    { id: 1, text: "Books", amount: 2500, type: TYPES.EXPENSE },
    { id: 5, text: "Lottery", amount: 5500, type: TYPES.INVESTMENT },
    { id: 3, text: "Shopping", amount: 10000, type: TYPES.EXPENSE },
    { id: 4, text: "Stocks", amount: 9500, type: TYPES.INVESTMENT },
  ],
  colors: {
    INVESTMENT: "#facc15",
    INCOME: "#b80c0c",
    EXPENSE: "#91075c",
    BALANCE: "#138483",
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
