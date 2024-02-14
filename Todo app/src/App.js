import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (todoText) => {
    // Add a new todo to the list
    const newTodo = { text: todoText };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    const {todos} = this.state;

    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form Addtodo = {this.handleAdd}/>
        <List todos = {todos} Removetodo = {this.handleRemove}/>
        
      </div>
    );
  }
}
