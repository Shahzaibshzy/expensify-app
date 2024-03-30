import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../routers/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should create snapshot of expense form", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should create snapshot of expense form with data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error on wrong form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should render description on imput", () => {
  const value = "New Description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});
test("should render note on textarea change", () => {
  const value = "a new note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").at(0).simulate("change", {
    target: { value },
  }),
    expect(wrapper.state("note")).toBe(value);
});
test("should render amount on imput", () => {
    const value = "12.22";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
      target: { value },
    });
    expect(wrapper.state("amount")).toBe(value);
  });

  test("should render amount on imput", () => {
    const value = "12.222";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
      target: { value },
    });
    expect(wrapper.state("amount")).toBe("");
  });
test("should call onSubmit prop for valid  from submission",()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy}/>);
    wrapper.find('form').simulate( 'submit', {
        preventDefault: () =>{

        }
    });
    expect(wrapper.state("error")).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    })
});
test("should render on Date change", ()=> {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});
test("should render on focused change", ()=> {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop("onFocusChange")({focused});
    expect(wrapper.state("calenderFocuesd")).toBe(focused);
})