import React from "react";

import { useAppContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function History() {
  const {
    state: { transactions, colors },
  } = useAppContext();

  return (
    <div className="flex flex-col py-1 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {transactions.map((transaction, index) => (
        <Transaction
          key={index}
          transaction={transaction}
          color={colors[transaction.type]}
        />
      ))}
    </div>
  );
}

export default History;
