import moment from "moment";

const filterDefaultState = {
  text: ``,
  sortBy: `date`,
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

export default (state = filterDefaultState, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case `START_DATE`:
      return {
        ...state,
        startDate: action.update,
      };
    case `END_DATE`:
      return {
        ...state,
        endDate: action.update,
      };
    default:
      return state;
  }
};
