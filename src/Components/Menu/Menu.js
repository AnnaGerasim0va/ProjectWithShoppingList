import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
      <div>
        <ul className="main">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/mainList">Списки покупок</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
      </div>
        
    )
  }

}

export default Menu;   