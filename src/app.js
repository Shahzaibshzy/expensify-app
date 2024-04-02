import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./style/style.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
console.log("test");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
var appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
root.render(jsx);
