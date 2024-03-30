import AddExpenses from "./AddExpenses";
import EditExpenses from "./EditExpenses";
import Expenses from "./Expenses";
import Header from "./Header";
import Help from "./Help";
import NotFoundPage from "./NotFoundPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="/create" element={<AddExpenses />} />
        <Route path="/edit/:id" element={<EditExpenses />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
