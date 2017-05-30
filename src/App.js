import React, { Component } from 'react';
import {NavLink, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Github from './Github'

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
        <Switch>
          <Route path='/github' component={Github}/>
          <Route path='/nasa' render={()=><p></p>}/>
          <Route path='/homework' render={()=><h1>Git outta here</h1>}/>
          <Route render={()=><p>To get started, click one of the links above</p>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
