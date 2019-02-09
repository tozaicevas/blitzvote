import React, { Component } from 'react';
import { Router } from 'react-router';
import { history } from './state';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <div>labas</div>
        </Router>
      </div>
    );
  }
}

export default App;
