import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handlesubmit, resetField } = useForm();
  // register--> to register input text boxes, handleSubmit--> submit the data to the form, resetField--> reset the value of the input text boxes

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handlesubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder=" Salary, House Rent, SIP"
              className="form-input px-3 py-2"
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
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
    </div>
  );
}

export default Form;
