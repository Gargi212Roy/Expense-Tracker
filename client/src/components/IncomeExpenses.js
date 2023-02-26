import React from "react";
import { useAppContext } from "../context/GlobalState";

function IncomeExpenses() {
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

  return (
    <>
      <div>{income - investment - expense}</div>
      <div className="in-ex-container">
        <div>
          <h4>Income</h4>
          <p className="income">{income}</p>
        </div>
        <span className="divider"></span>
        <div>
          <h4>Investment</h4>
          <p className="investment">{investment}</p>
        </div>
        <span className="divider"></span>
        <div>
          <h4>Total Expense</h4>
          <p className="expense">{expense}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
