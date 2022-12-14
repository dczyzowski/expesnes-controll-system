import "./ExpenseItem.scss";
import { Expense, InvoiceItem } from "./Interfaces";

const ExpenseItem = (props: { expense: Expense }) => {
  const sumAmount = () => {
    let sum = 0;
    if (
      props.expense.items &&
      props.expense.items.length !== 0 &&
      props.expense.items !== undefined
    )
      props.expense.items.map(
        (item: InvoiceItem) => (sum += Number(item.amount))
      );
    else sum = props.expense.amount;

    return sum;
  };
  return (
    <li className="expense-item">
      <div className="expense-item__avatar">{props.expense.user.charAt(0)}</div>
      <div className="expense-item__information">
        <p> {props.expense.user}</p>
        <div className="expense-item__description">
          <p> {props.expense.category}</p>
        </div>
        <div className="expense-item__date">
          <p>{props.expense.date.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="expense-item__money">
        <p> {sumAmount()}</p>
      </div>
    </li>
  );
};

export default ExpenseItem;
