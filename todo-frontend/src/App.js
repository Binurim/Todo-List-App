import React, { Component } from 'react';
import './App.css';
import ToDoListContainer from './container/TodoListContainer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="card mt-5 mb-5 col-sm-6 container">
              <ToDoListContainer/>
      </div>
    );
  }
}

export default App;
