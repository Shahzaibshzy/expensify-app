import React from "react";
import { shallow } from "enzyme";
import Expenses from "../../routers/Expenses";


test("should test Expenses DAshboard", ()=>{
    const wrapper = shallow(<Expenses/>);
    expect(wrapper).toMatchSnapshot();
});
