import React, { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const TYPES = {
  INVESTMENT: "INVESTMENT",
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
};

const getLocalStorageTransactions = () => {
  let newTransaction = localStorage.getItem("data");
  if (newTransaction === []) {
    return [];
  } else {
    return JSON.parse(newTransaction);
  }
};

// initial State
const initialState = {
  transactions: [],
  // transactions: [
  //   { id: 2, text: "Salary", amount: 55500, type: TYPES.INCOME },
  //   { id: 1, text: "Books", amount: 2500, type: TYPES.EXPENSE },
  //   { id: 5, text: "Lottery", amount: 5500, type: TYPES.INVESTMENT },
  //   { id: 3, text: "Shopping", amount: 10000, type: TYPES.EXPENSE },
  //   { id: 4, text: "Stocks", amount: 9500, type: TYPES.INVESTMENT },
  // ],
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

  useEffect(() => {
    console.log("Hello");
    let data = {};
    if (localStorage.getItem("data")) {
      data = JSON.parse(localStorage.getItem("data"));
    }
    dispatch({
      type: "INITIAL_STATE",
      payload: data,
    });
    console.log({ data });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
    console.log(state);
  }, [state]);

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
