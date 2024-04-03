import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import totalexpenses from "../selectors/expenses-total";


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const expenseTotalFormat = numeral(expenseTotal / 100).format("$0,0.00");

  return (
    <div>
      <h1>
        viewing {expenseCount} {expenseWord} totalling {expenseTotalFormat}
      </h1>
    </div>
  );
};

const mapStateToProp = (state) => {
const VisibleExpense = selectExpenses(state.expenses, state.filters);
return {
    expenseCount: VisibleExpense.length,
    expenseTotal: totalexpenses(VisibleExpense)
}
};

export default connect(mapStateToProp)(ExpensesSummary);