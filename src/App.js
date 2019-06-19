import React, { Component } from 'react';
import './App.css';
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Todos todos= { this.state.todos } markComplete={this.markComplete}/>
        </header>
      </div>
    );
  }
}

export default App;
