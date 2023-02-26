// import React, { useContext } from "react";
import "boxicons";
import { useAppContext } from "../context/GlobalState";
function Transaction({ transaction, color }) {
  // passing value to Transaction from History component
  const { dispatch } = useAppContext();

  const handleDelete = (id) => {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  };

  if (!transaction) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${color ?? "#e5e5e5"}` }}
    >
      <button className="px-3" onClick={() => handleDelete(transaction.id)}>
        <box-icon
          color={color ?? "#e5e5e5"}
          size="15px"
          name="trash"
        ></box-icon>
      </button>
      <span className="block w-full">{transaction.text ?? ""}</span>
      <span className="block w-full">{transaction.amount ?? ""}</span>
      <span className="block w-full">{transaction.type ?? ""}</span>
    </div>
  );
}

export default Transaction;
