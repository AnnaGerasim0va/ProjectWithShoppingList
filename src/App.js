import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home';
import Bag from './Components/Bag';
import About from './Components/About';
import Menu from './Components/Menu/Menu';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();



class App extends Component {
  render() {
    localStorage.setItem('count', '125');
    return (
      <Router history={history}>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/bag" component={Bag} />
        <Route path="/about" component={About} />
      </Router>
    )
  }

}

export default App;
