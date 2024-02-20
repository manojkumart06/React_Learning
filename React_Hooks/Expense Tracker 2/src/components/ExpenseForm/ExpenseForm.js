import { useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {

  const {addExpense} = props;

  const [formData, setFormData] = useState({text : "", amount : ""})
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense here
     // Create a new expense object
    const newExpense = {text : formData.text,
                        amount : parseFloat(formData.amount) }

    // Call addExpense function passed from parent component
    addExpense(newExpense);

    // Reset input fields
    setFormData({text : "", amount : ""})

    expenseTextInput.current.focus();

  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        value={formData.text}
        onChange={(e) => setFormData({text : e.target.value, amount : formData.amount})}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={formData.amount}
        onChange={(e) => setFormData({text : formData.text, amount : e.target.value})}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;


