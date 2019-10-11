import React, { Component } from "react";
import { withRouter } from "react-router";
import { Header, HeaderButton, StyledLink } from "./HeaderStyles";

const ROUTES = {
  main: {
    url: "/",
    title: "Главная"
  },
  lists: {
    url: "/mainList",
    title: "Списки покупок"
  },
  about: {
    url: "/about",
    title: "О нас"
  }
};

class Menu extends Component {
  isActive = ({ url }) => {

    const { pathname } = this.props.location;
    // pathname = pathname.replace("/", "");
    /*if (pathname === ROUTES.main.url) {
      //if (pathname != "/mainList" && pathname != "/about"){
      return true;
    } else {
      return url === ROUTES.main.url ? false : pathname.includes(url);
    }*/
    const currentPage = pathname.split("/")[1];
    return `/${currentPage}` === url;
  };

  render() {
    const { main, lists, about } = ROUTES;
    return (
      <Header>
        <HeaderButton isActive={this.isActive(main)}>
          <StyledLink to="/">{main.title}</StyledLink>
        </HeaderButton>

        <HeaderButton isActive={this.isActive(lists)}>
          <StyledLink to="/mainList">{lists.title}</StyledLink>
        </HeaderButton>

        <HeaderButton isActive={this.isActive(about)}>
          <StyledLink to="/about">{about.title}</StyledLink>
        </HeaderButton>
      </Header>
    );
  }
}

export default withRouter(Menu);
