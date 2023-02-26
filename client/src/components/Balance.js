import React from "react";
import IncomeExpenses from "./IncomeExpenses";
import { useAppContext } from "../context/GlobalState";

function Balance() {
  const {
    state: { transactions },
    dispatch,
  } = useAppContext();
  const amounts = transactions.map((transaction) => transaction.amount);

  return (
    <>
      <h3 className="mb-4 font-bold title">
        Total Balance
        <span className="block text-3xl text-emerald-400">
          {/* {totalAmount(income) - totalAmount(investment) - totalAmount(expense)} */}
        </span>
      </h3>
    </>
  );
}

export default Balance;
