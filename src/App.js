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
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Todos todos= { this.state.todos }/>
        </header>
      </div>
    );
  }
}

export default App;
