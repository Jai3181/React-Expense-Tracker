import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({title,amount,date}) {
    return (
        <Card className="expense-item">
            <div><ExpenseDate date={date}/></div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">Rs.{amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;