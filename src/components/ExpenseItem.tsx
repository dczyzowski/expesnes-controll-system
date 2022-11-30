import "./ExpenseItem.scss";
import { Expense } from "./Interfaces";

const ExpenseItem = (props: { expense: Expense }) => {
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
        <p> {props.expense.amount}</p>
      </div>
    </li>
  );
};

export default ExpenseItem;
