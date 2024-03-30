import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../routers/NotFoundPage"

test("should have test not found page", ()=>{
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot(); 
});