import React from "react";
import { shallow } from "enzyme";
import { AddExpenses } from "../../routers/AddExpenses";
import expenses from "../fixtures/expenses";
import { useNavigate } from "react-router-dom";


let addExpense, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  wrapper = shallow(<AddExpenses addExpense={addExpense} />);
});
test("should render addexpense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handla addExpense", () => {
  wrapper.find("AddExpensesFunctional").prop("onSubmit")(expenses[1]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
