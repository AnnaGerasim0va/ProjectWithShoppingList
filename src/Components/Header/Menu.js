import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, HeaderButton } from "../Header/HeaderStyles";

class Menu extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderButton>
            <Link to="/">Главная</Link>
          </HeaderButton>

          <HeaderButton>
            <Link to="/mainList">Списки покупок</Link>
          </HeaderButton>

          <HeaderButton>
            <Link to="/about">About</Link>
          </HeaderButton>
        </Header>
        <hr />
      </>
    );
  }
}

export default Menu;
