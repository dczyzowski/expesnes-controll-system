import ExpenseItem from "./ExpenseItem";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const ExpesneList = ({ children }: Props) => {
  return <div className="expenses-list">{children}</div>;
};

export default ExpesneList;
