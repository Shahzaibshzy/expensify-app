import moment from "moment";
import selectExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("should sort expense by given values", () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[1]]);

});

test("should sort expense by start date filter", ()=>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test("should sort expense by End date filter", ()=>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[0],expenses[1]]);
})
test("should sort expense sortby date", ()=>{
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test("should sort expense sortby amount", ()=>{
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});
