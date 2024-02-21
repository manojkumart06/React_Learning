import "./App.css";
import React from "react";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App (){
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);


  // Function to add expenses
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Calculate total income and expense
  const totalIncome = expenses.reduce((acc, curr) => {
    return curr.amount > 0 ? acc + curr.amount : acc;
  }, 0);

  const totalExpense = expenses.reduce((acc, curr) => {
    return curr.amount < 0 ? acc + Math.abs(curr.amount) : acc;
  }, 0);

  

    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm addExpense={addExpense}/>
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo totalIncome={totalIncome} totalExpense={totalExpense}/>
          <ExpenseList expenses={expenses}/>
          </div>
        </div>
      </>
    );
  }


