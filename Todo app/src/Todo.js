import { Component } from "react";

export class Todo extends Component {
  render() {
    const {todo,removeTodo} = this.props;
    const {text} = todo
    return (
      <div className="todo">
        <p>{text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={removeTodo}>x</button>
      </div>
    );
  }
}

