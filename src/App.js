import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import { ArrayContext } from "./ShoppingListContext";
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

class App extends Component {
  constructor(props) {
    super(props);
    const listsArray = [LIST_FOR_B_DAY, LIST_FOR_WEEK, LIST_FOR_CHILDREN].map(
      (item, index) => {
        return { ...item, id: index };
      }
    );
    this.state = {
      listsArray
    };
  }


  handleListCreate = newListName => {
    const { listsArray } = this.state;
    if (newListName) {
      this.setState({ 
        listsArray: [...listsArray, {
          name: newListName, 
          date: {},
          productsList: [],
          id: listsArray.length}]
        })
    }
  };

  componentWillMount() {
    // const { GlobalArray } = this.state;
    // const localStorageArray = JSON.stringify(
    //   [LIST_FOR_B_DAY, LIST_FOR_WEEK, LIST_FOR_CHILDREN].map((item, index) => {
    //     return { ...item, id: index };
    //   })
    // );
    // localStorage.setItem("listsArray", localStorageArray);
    // this.setState({ GlobalArray: localStorageArray });
  }

  render() {
    const { listsArray } = this.state;
    return (
      <ArrayContext.Provider value={{listsArray, handleListCreate: this.handleListCreate}}>
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
