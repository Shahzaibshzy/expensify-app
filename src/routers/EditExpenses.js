import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import { remoeExpense } from "../actions/expenses";

const EditExpenses = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example usage of navigate to go back to the homepage ('/')
  const handleGoBack = () => {
    navigate("/");
  };


  return(<div>
    <ExpenseForm expense={props.expense} onSubmit={(expense) => {
      props.dispatch(editExpense(id,expense));
      handleGoBack();
    }} />
    <button
      onClick={() => {
        props.dispatch(remoeExpense({ id }));
        handleGoBack();
      }}
    >
      Remove
    </button>
    
    </div>)
};

const mapStateToProps = (state) => {
  const params = {id: window.location.pathname.split("/")[2]}
  return {
      expense: state.expenses.find((expense) => expense.id === params.id)
  }
}

export default connect(mapStateToProps)(EditExpenses);
