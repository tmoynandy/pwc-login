import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Login from './Components/Auth/Login'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
