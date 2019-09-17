import React, { Component } from "react";
import { Header, HeaderButton, StyledLink} from "../Header/HeaderStyles";

class Menu extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderButton>
            <StyledLink to="/">Главная</StyledLink>
          </HeaderButton>

          <HeaderButton>
            <StyledLink to="/mainList">Списки покупок</StyledLink>
          </HeaderButton>

          <HeaderButton>
            <StyledLink to="/about">About</StyledLink>
          </HeaderButton>
        </Header>
      </>
    );
  }
}

export default Menu;
