import React from "react";

import { useAppContext } from "../context/GlobalState";

function Balance() {
  const {
    state: { transactions },
  } = useAppContext();
  const income = transactions.reduce(
    (currSum, transaction) =>
      transaction.type === "INCOME"
        ? currSum + parseInt(transaction.amount.toString())
        : currSum,
    0
  );
  const investment = transactions.reduce(
    (currSum, transaction) =>
      transaction.type === "INVESTMENT"
        ? currSum + parseInt(transaction.amount.toString())
        : currSum,
    0
  );
  const expense = transactions.reduce(
    (currSum, transaction) =>
      transaction.type === "EXPENSE"
        ? currSum + parseInt(transaction.amount.toString())
        : currSum,
    0
  );

  const balance = income - investment - expense;

  return (
    <>
      <h3 className="mb-4 font-bold text-2xl title">
        Total Balance
        <span className="block text-xl text-lime-900">Rs {balance}</span>
      </h3>
    </>
  );
}

export default Balance;
