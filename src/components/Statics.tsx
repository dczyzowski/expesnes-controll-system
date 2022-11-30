import { Expense } from "./Interfaces";

export const vendorsArray = [
  "Profit Media - Sławomir Trzósło",
  "Chroma.pl",
  "Coś innego",
];

export const dummyExpenseList: Expense[] = [
  {
    user: "Damian",
    vendor: "Profit media",
    category: "Prints",
    date: new Date(2022, 11, 17),
    amount: 200,
  },
  {
    user: "Damian",
    vendor: "Chroma",
    category: "Cataloques",
    date: new Date(2022, 11, 10),
    amount: 200,
  },
  {
    user: "Damian",
    vendor: "Profit media",
    category: "Prints",
    date: new Date(2022, 11, 12),
    amount: 40,
    item: [
      {
        name: "Wizytówki",
        market: "Eng",
        amount: 10,
      },
      {
        name: "Katalogi FR",
        market: "PL",
        amount: 30,
      },
    ],
  },
];
