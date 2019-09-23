import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Header/Home";
import MainList from "./Components/Lists/MainList/MainList";
import ShoppingList from "./Components/Lists/Products/ShoppingList";
import About from "./Components/Header/About";
import Header from "./Components/Header/Header";
import createBrowserHistory from "history/createBrowserHistory";
import {
  LIST_FOR_B_DAY,
  LIST_FOR_WEEK,
  LIST_FOR_CHILDREN
} from "./Components/Constants";

const HISTORY = createBrowserHistory();
const listsArray = [];
const ArrayContext = React.createContext(listsArray);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listsArray: []
    };
  }

  componentWillMount() {
    const { listsArray } = this.state;
    const localStorageArray = JSON.stringify(
      [LIST_FOR_B_DAY, LIST_FOR_WEEK, LIST_FOR_CHILDREN].map((item, index) => {
        return { ...item, id: index };
      })
    );
    localStorage.setItem("listsArray", localStorageArray);
    this.setState({ listsArray: localStorageArray });
  }

  render() {
    return (
      <ArrayContext.Provider value = {this.state}>
      <Router history={HISTORY}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/mainList" component={MainList} />
        <Route path="/about" component={About} />
        <Route path="/mainList/:id" component={ShoppingList} />
      </Router>
      </ArrayContext.Provider>
    );
  }
}

export default App;
