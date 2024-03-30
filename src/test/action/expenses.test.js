import { addExpense, editExpense, remoeExpense } from "../../actions/expenses";

test("should setup removeExpense", () => {
  const action = remoeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup editExpense", () => {
  const action = editExpense("123abc", { note: "a note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    update: {
      note: "a note",
    },
  });
});

test("should setup addExpense with provided values", ()=>{
const expenseDate = {
    description: "Rent",
    amount: 104500,
    createdAt: 1000,
    note: "a note"
}
const action = addExpense(expenseDate);
expect(action).toEqual({

    type: `ADD_EXPENSE`,
    expenses: 
    {
       ...expenseDate,
       id: expect.any(String)
    }

});

});
test("should setup addExpense with default values", ()=>{

const action = addExpense();
expect(action).toEqual({

    type: `ADD_EXPENSE`,
    expenses :{
        description: "",
        amount: 0,
        createdAt: 0,
        note: "",
        id: expect.any(String)
    }

});

});
