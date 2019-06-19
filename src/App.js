import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'code for 3 hours',
        completed: false
      },
      {
        id: 2,
        title: 'exercise',
        completed: false
      },
      {
        id: 3,
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
    console.log(title);
  }


  render() {
    return (
      <div className="App">
        <header className="container">
        <Header />
        <Addtodo addTodo={this.addTodo} />
        <Todos todos= { this.state.todos } markComplete={this.markComplete}
        delTodo={this.delTodo} />
        </header>
      </div>
    );
  }
}

export default App;
