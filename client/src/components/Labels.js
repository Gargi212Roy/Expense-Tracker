import React from "react";

const obj = [
  {
    type: "Savings",
    color: "#be185d",
    percent: 45,
  },
  {
    type: "Investment",
    color: "#f9a8d4",
    percent: 20,
  },
  {
    type: "Expense",
    color: "#fb7185",
    percent: 10,
  },
];

function Labels() {
  return (
    <>
      {obj.map((v, i) => (
        <LabelComponent key={i} data={v} />
      ))}
    </>
  );
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? "#fb7185" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
}
export default Labels;