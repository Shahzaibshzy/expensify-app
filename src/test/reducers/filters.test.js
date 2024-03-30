import moment from "moment";
import filtersReducers from "../../reducers/filters";

test("should setup default filters value", () => {
  const state = filtersReducers(undefined, {
    type: "@@INIT",
  });
  expect(state).toEqual({
    text: ``,
    sortBy: `date`,
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});
test("should setup default filters by amount", () => {
  const state = filtersReducers(undefined, {
    type: "SORT_BY_AMOUNT",
  });
  expect(state.sortBy).toBe("amount");
});

test("should setup default filters by Date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducers(currentState,action);
  expect(state.sortBy).toBe("date");
});
test("should set filter by text", ()=>{
    const text = 'this is my text';
    const action = {
        type: "TEXT_FILTER",
        text
    }
    const result = filtersReducers(undefined, action);
    expect(result.text).toBe(text);

});

test("should set filter by startDate", ()=>{
    const startDate = moment();
    const action = {
        type:'START_DATE',
        update:startDate
    };
    const result = filtersReducers(undefined,action);
    expect(result.startDate).toEqual(startDate);
})
test("should set filter by endDate", ()=>{
    const endDate = moment();
    const action = {
        type:'END_DATE',
        update:endDate
    };
    const result = filtersReducers(undefined,action);
    expect(result.endDate).toEqual(endDate);
})
