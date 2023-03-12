import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import Balance from "./Balance";
import { useAppContext } from "../context/GlobalState";

Chart.register(ArcElement);

function Graph() {
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

  const config = {
    data: {
      datasets: [
        {
          data: [balance, investment, expense],
          backgroundColor: [colors.BALANCE, colors.INVESTMENT, colors.EXPENSE],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          {/* initializing 2 properties with the same name ---> data property and option property */}
          <Balance />
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
}

export default Graph;
