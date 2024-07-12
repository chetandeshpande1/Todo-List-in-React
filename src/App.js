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
  handleAdd = (newTodo) => {
    // complete the function to add a new Todo to the list
    this.setState((prevState) => ({
      todos: [...prevState.todos, {text: newTodo}],
    }));
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo, i) => i !== index),
    }));
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form onAdd ={this.handleAdd} />
        <List todos = {this.state.todos} onRemove = {this.handleRemove} />
        {/* <Form />
        <List /> */}
      </div>
    );
  }
}
