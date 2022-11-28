import "./App.scss";
import ExpensesList from "./components/ExpensesList";
import ExpenseItem from "./components/ExpenseItem";
import UserInfoBox from "./components/UserInfoBox";

import AddFormDialog from "./components/AddFormDialog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInfoBox />
        <ExpensesList>
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </ExpensesList>
        <AddFormDialog />
      </header>
    </div>
  );
}

export default App;
