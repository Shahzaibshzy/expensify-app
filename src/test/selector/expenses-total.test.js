import selectExpenseTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

test("should return 0 when expenses are not given", ()=>{
    const req = selectExpenseTotal([]);
    expect(req).toBe(0);
});
test("should return when 1 expense are given", ()=>{
    const req = selectExpenseTotal([expenses[1]]);
    expect(req).toBe(600);
})
test("should return when multiple expenses are given", ()=>{
    const req = selectExpenseTotal(expenses);
    expect(req).toBe(1095);
})

