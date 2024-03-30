import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const Expenses = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Expenses;
