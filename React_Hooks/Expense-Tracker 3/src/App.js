import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function expenseReducer(state,action){
    switch(action.type){
      case "ADDEXPENSE" :
        return [action.expense, ...state];
      case "REMOVEXPENSE":
        return state.filter((expense,index) => index != action.index);
      default :
       return [];
    }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  //const [expenses, setExpenses] = useState([]);
   const [expenses,dispatch] = useReducer(expenseReducer,[])

    // Create function to add an expense
    function addExpense(newExpense){
      //setExpenses([newExpense,...expenses]);
      dispatch({type : 'ADDEXPENSE',expense : newExpense})
    }
  
    // Create function to delete an expense
    function deleteExpense(i){
      //setExpenses(expenses.filter((expense,index) => i != index));
      console.log("Deleting expense with ID:", i); 
      dispatch({type : 'REMOVEXPENSE',index : i})
      
    }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense = {addExpense}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense = {deleteExpense}/>
        </div>
      </div>
    </>
  );
}

export default App;
