import React from 'react';
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem"

function ExpensesList(props) {
    if(props.expenses.length===0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    return (
        props.expenses.length===0?<b>NO EXPENSES FOUND</b>: props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
    );
}

export default ExpensesList;