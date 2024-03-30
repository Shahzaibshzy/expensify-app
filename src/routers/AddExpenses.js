import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";

const AddExpensesFunctional = ({ onSubmit }) => {
  const navigate = useNavigate();
  const handleSubmit = (expense) => {
    onSubmit(expense);
    navigate("/");
  };

  return (
    <div>
      this is my expenses addition
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};

export class AddExpenses extends React.Component {
  render() {
    return (
      <div>
        <AddExpensesFunctional onSubmit={this.props.addExpense} />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});
export default connect(undefined, mapDispatchToProps)(AddExpenses);
