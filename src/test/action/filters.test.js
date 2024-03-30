import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("should make test case for start date", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "START_DATE",
    update: moment(0),
  });
});

test("should make test case for end date", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "END_DATE",
    update: moment(0),
  });
});

test("should make test case for text filters", () => {
  const action = setTextFilter(`text`);
  expect(action).toEqual({
    type: `TEXT_FILTER`,
    text: "text",
  });
});
test("should make test case for text filters with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: `TEXT_FILTER`,
    text: "",
  });
});
test("should make test case for sort by date", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});
test("should make test case for sort by amount", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
