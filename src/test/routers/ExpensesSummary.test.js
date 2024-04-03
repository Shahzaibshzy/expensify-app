import React from "react";
import { shallow } from "enzyme";
import ExpensesSummary from "../../routers/ExpensesSummary";

test("should have render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1}  expenseTotal = {295}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should have render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={12312323} />);
  expect(wrapper).toMatchSnapshot();    
});
