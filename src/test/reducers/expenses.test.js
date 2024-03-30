import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should test reducers default value", () => {
  const actionState = {
    type: "@@INIT",
  };
  const state = expensesReducer(undefined, actionState);
  expect(state).toEqual([]);
});
test("should test reducer with remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[2].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});
test("should test reducer with remove expense with wrong id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
test("should test recuder for add expense", ()=>{
const expense = {
    id: '102',
    description: 'bubble',
    note: '',
    amount: 19,
    createdAt: 20000
};
const action = {
  type: "ADD_EXPENSE",
  expenses: expense
};
const state = expensesReducer(expenses, action);
expect(state).toEqual([...expenses, expense]);
});
  test("should test reducer with edit expense and valid id",()=>{
    const amount = 2400;
    const action = {
      type: "EDIT_EXPENSE",
      id: expenses[1].id,
      update: {
        amount
    }
  }
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);
  });
  test("should test reducer with edit expense with wrong id", () => {
    const amount = 2400;
    const action = {
      type: "EDIT_EXPENSE",
      id: "-1",
      update: {
        amount
    }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
