import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Header/Home";
import MainList from "./Components/Lists/MainList";
import ShoppingList from "./Components/Lists/ShoppingList";
import About from "./Components/Header/About";
import Menu from "./Components/Header/Menu";
import createBrowserHistory from "history/createBrowserHistory";
import {LIST_FOR_B_DAY,LIST_FOR_WEEK, LIST_FOR_CHILDREN} from "./Components/Constants"

const HISTORY = createBrowserHistory();

class App extends Component {
  componentWillMount() {
    const localStorageArray = JSON.stringify(
      [LIST_FOR_B_DAY, LIST_FOR_WEEK, LIST_FOR_CHILDREN].map((item, index) => {
        return { ...item, id: index };
      })
    );

    localStorage.setItem("listsArray", localStorageArray);
  }

  render() {
    return (
      <Router history={HISTORY}>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/mainList" component={MainList} />
        <Route path="/about" component={About} />
        <Route path="/mainList/:id" component={ShoppingList} />
      </Router>
    );
  }
}

export default App;
