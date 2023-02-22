import React from "react";
import "boxicons";

const obj = [
  {
    name: "Savings",
    color: "#be185d",
  },
  {
    name: "Investment",
    color: "#f9a8d4",
  },
  {
    name: "Expense",
    color: "#fb7185",
  },
];

function History() {
  return (
    <div className="flex flex-col py-1 gap-3">
      <h1 className="py-4 text-md font-bold text-xl">History</h1>
      {obj.map((v, i) => (
        <Transaction key={i} category={v} />
      ))}
    </div>
  );
}

function Transaction({ category }) {
  // passing value to Transaction from History component
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="trash"
        ></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}

export default History;
