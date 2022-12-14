import ExpenseItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";
import "./ExpenseList.scss";
import { Expense } from "./Interfaces";

const ExpenseList = () => {
  const [expenseList, setExpenseList] = useState<Expense[]>([]);

  const fetchList = async () => {
    //In this case I read data from django api problem was header and cors policy. I had to install cors on django project and allow my host
    await fetch("http://127.0.0.1:8000/api/task-list/", {
      method: "GET",
      mode: "cors", //cors is obligatory to fetch data
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => response.json())
      .then((list) => {
        const finList: Expense[] = [];
        list.map((item: Expense) =>
          finList.push({ ...item, date: new Date(item.date) })
        );
        setExpenseList(finList);
        console.log(finList);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <ul className="expenses-list">
      {expenseList.map((element, index) => (
        <ExpenseItem key={index} expense={element} />
      ))}
    </ul>
  );
};

export default ExpenseList;
