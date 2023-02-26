import React, { useState } from "react";
import { useAppContext } from "../context/GlobalState";

import History from "./History";
import IncomeExpenses from "./IncomeExpenses";

function Form() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("EXPENSE");

  const { state, dispatch } = useAppContext();

  const onSubmit = () => {
    console.log(text, amount, type);
    if (text.length === 0) {
      return;
    }

    if (amount < 1) {
      return;
    }

    dispatch({
      type: "ADD_TRANSACTION",
      payload: { id: state.transactions.length + 1, text, amount, type },
    });
    setAmount(0);
    setText("");
    setType("EXPENSE");
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">TRANSACTION</h1>
      <div id="form">
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
          <select
            onChange={(e) => setType(e.target.value)}
            className="form-input"
          >
            <option value="INVESTMENT">INVESTMENT</option>
            <option value="EXPENSE" defaultValue>
              EXPENSE
            </option>
            <option value="INCOME">INCOME</option>
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
          <div className="submit-btn" onClick={onSubmit}>
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </div>
      <IncomeExpenses />
      <History />
    </div>
  );
}

export default Form;
