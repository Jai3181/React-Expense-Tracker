import './App.css';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses= [
    {
      title: "title 1",
      amount:200,
      date:new Date(Date.UTC(2012, 11, 20, 3, 0, 0))

    },
    {
      title: "title 2",
      amount:300,
      date:new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
    },
    {
      title: "title 3",
      amount:400,
      date:new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
    }
  ]

  const addExpenseHandler = (expense) =>{
    console.log("IN App.js")
    console.log(expense)
  }
  return (
    <div className="App">
      <h2>Expense Tracker App</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
