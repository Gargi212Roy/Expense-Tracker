import React, { useState } from "react";

import History from "./History";
import IncomeExpenses from "./IncomeExpenses";

function Form() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form">
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder=" Salary, House Rent, SIP"
              className="form-input px-3 py-2"
            />
          </div>
          <select className="form-input">
            <option value="Investment">Investment</option>
            <option value="Expense" defaultValue>
              Expense
            </option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="form-input px-3 py-2"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <IncomeExpenses />
      <History />
    </div>
  );
}

export default Form;
