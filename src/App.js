import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import uuid from 'uuid'
import Header from './components/Header'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'code for 3 hours',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'exercise',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'meditate',
        completed: false
      },
    ], };
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) });
    };
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)] });
  };
  addTodo = (title) => {
    const newTodo ={
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo]});
  }


  render() {
    return (
      <Router>
        <div className="App">
          <header className="container">
          <Header />
          <Addtodo addTodo={this.addTodo} />
          <Todos todos= { this.state.todos } markComplete={this.markComplete}
          delTodo={this.delTodo} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
