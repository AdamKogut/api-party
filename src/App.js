import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like a</h3>
            <h1>API Party</h1>
          </div>
          <ul className='nav-links'>
            <li><NavLink to='/github'>GitHub API</NavLink></li>
            <li><NavLink to='/nasa'>NASA API</NavLink></li>
            <li><NavLink to='/homework'>Homework API</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
