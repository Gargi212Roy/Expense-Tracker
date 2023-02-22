import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial State
const initialState = {
  transactions: [
    { id: 1, text: "Books", amount: -500 },
    { id: 1, text: "Salary", amount: 55500 },
    { id: 1, text: "Chocolate", amount: -50 },
    { id: 1, text: "Check Return", amount: 5500 },
  ],
};

// create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
