import React,{useState} from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const Dummy= [
    {
      id : 'e1',
      title: "title 1", 
      amount:200,
      date:new Date(Date.UTC(2021, 11, 20, 3, 0, 0))

    },
    {
      id : 'e2',
      title: "title 2",
      amount:300,
      date:new Date(Date.UTC(2022, 11, 20, 3, 0, 0))
    },
    {
      id : 'e3',
      title: "title 3",
      amount:200,
      date:new Date(Date.UTC(2020, 11, 20, 3, 0, 0))

    },
    {
      id : 'e4',
      title: "title 4",
      amount:40000,
      date:new Date(Date.UTC(2020, 7, 31, 4, 0, 0))
    }
  ]

  const [expenses,setExpenses]=useState(Dummy)

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    })
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
