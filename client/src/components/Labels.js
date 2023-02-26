import React from "react";
import { useAppContext, TYPES } from "../context/GlobalState";

function Labels() {
  const {
    state: { transactions, colors },
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

  const calculatePercentage = (type) => {
    switch (type) {
      case TYPES.INCOME:
        return ((balance * 1.0) / (income * 1.0)) * 100.0;
      case TYPES.INVESTMENT:
        return ((investment * 1.0) / (income * 1.0)) * 100.0;
      case TYPES.EXPENSE:
        return ((expense * 1.0) / (income * 1.0)) * 100.0;
      default:
        return 0;
    }
  };

  return (
    <>
      {Object.keys(TYPES).map((type, i) => (
        <LabelComponent
          key={i}
          type={type === TYPES.INCOME ? "BALANCE" : type}
          percentage={calculatePercentage(type).toFixed(2)}
          color={colors[type]}
        />
      ))}
    </>
  );
}

function LabelComponent({ type, percentage, color }) {
  if (!type) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: color ?? "#fb7185" }}
        ></div>
        <h3 className="text-md">{type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{percentage ?? 0}%</h3>
    </div>
  );
}
export default Labels;
