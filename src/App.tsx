import "./App.scss";
import ExpensesList from "./components/ExpensesList";
import UserInfoBox from "./components/UserInfoBox";

import AddFormDialog from "./components/AddExpenseDialog/AddFormDialog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInfoBox />
      </header>
      <main>
        <div className="left-menu">
          <ExpensesList />
        </div>
        <div className="content">This is main content</div>
        <AddFormDialog />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
