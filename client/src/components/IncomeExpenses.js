import React from "react";

function IncomeExpenses() {
  return (
    <div className="in-ex-container">
      <div>
        <h4>Income</h4>
        <p className="income">$0</p>
      </div>
      <span className="divider"></span>
      <div>
        <h4>Total Expense</h4>
        <p className="expense">$0</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
