import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import "./App.css";
const history = createBrowserHistory();

const Home = () => (
  <div> 
    <h2>Home</h2>
    <p>Welcome to our blabla</p>
  </div>
)

const Bag = () => (
  <div> 
    <h2>Bag</h2>
    <p>This is your bag</p>
    </div>
)

const About = () => (
  <div> 
    <h2>About</h2>
    <p>Information about our company</p>
    </div>
  )

class App extends Component{
  render(){
    return (
      <Router history={history}>
        <ul className="main">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bag">Bag</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/bag" component={Bag}/>
        <Route path="/about" component={About}/>
      </Router>
    )
  }
  
}

export default App;
