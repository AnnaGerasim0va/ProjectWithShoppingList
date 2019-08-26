import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


class Menu extends Component {

  state = {
  name: '',
  field1: '',
  field2: ''
  }

 /* welcome = (event) => {
    this.setState({name: event.target.value})
    return (
      <p>Hello, {this.name}! Welcome to shopping list. Here you can create your own personal shopping list</p>)
  } */

  render() {
    return (
      <div>
        <ul className="main">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bag">Bag</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
      </div>
        
    )
  }

}

export default Menu;   