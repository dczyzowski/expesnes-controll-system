import "./ExpenseItem.scss";

const ExpenseItem = (...props: any) => {
  return (
    <div className="expense-item">
      <div className="expense-item__avatar">D</div>
      <div className="expense-item__information">
        <p>Damian</p>
        <div className="expense-item__description">
          <p>Klamki do wzornika</p>
        </div>
        <div className="expense-item__date">
          <p>20-11-2022</p>
        </div>
      </div>
      <div className="expense-item__money">
        <p>1000 zł</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
