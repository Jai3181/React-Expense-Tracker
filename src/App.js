import './App.css';
import Expenses from "./components/Expenses/Expenses"

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
  return (
    <div className="App">
      <h2>Expense Tracker App</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
