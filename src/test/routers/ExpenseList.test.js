import React from "react";
import {shallow} from 'enzyme';
import { ExpenseList } from "../../routers/ExpenseList";
import expenses from "../fixtures/expenses";


test("should render expense list with expense array", ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render expense list with empty array", ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})