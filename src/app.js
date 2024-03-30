import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./style/style.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 32500 }));

const state = store.getState();

const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
var appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
root.render(jsx);
