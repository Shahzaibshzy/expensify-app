import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../routers/ExpenseListItem";
import expenses from "../fixtures/expenses";


test("should render Expense list items ", ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});