import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import { ArrayContext } from "./ShoppingListContext";
import Home from "./Components/Header/Home";
import MainList from "./Components/Lists/MainList/MainList";
import ShoppingList from "./Components/Lists/Products/ShoppingList";
import About from "./Components/Header/About";
import Header from "./Components/Header/Header";
import createBrowserHistory from "history/createBrowserHistory";
import NotificationSystem from "react-notification-system";
import { successStyle } from "./Components/NotificationStyles";
import axios from "axios";
import { SORT_OPTIONS } from "./Components/Constants";
import { theme } from "./Components/Themes";

const HISTORY = createBrowserHistory();

class App extends Component {
  state = {
    listsArray: [],
    listsId: null,
    currentList: {},
    sortArray: [],
    isDeletion: false,
    isOneClick: false,
    sortOption: {
      type: null,
      reverse: false
    }
  };
  notificationSystemRef = React.createRef();

  getData = async () => {
    try {
      const listsArray = await axios.get("http://localhost:3077/getLists");
      this.setState({
        listsArray: listsArray.data.map((item, index) => {
          return { ...item, id: index };
        })
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getData();
  }
  // handleDeletion = id => {
  //   const { isDeletion, listsId } = this.state;
  //   this.setState({ listsId: id });
  //   this.setState({ isDeletion: true });
  // };

  deleteElement = ({ listId }) => {
    const { listsArray } = this.state;
    this.setState({
      listsArray: listsArray.filter(item => item.id !== listId)
    });
  };

  changeSortOption = type => {
    const { sortOption } = this.state;
    this.setState({ sortOption: { ...sortOption, type: type } });
  };

  sortArrayFunction = (listsArray, sortOption) => () => {
    let { type, reverse } = sortOption;
    let { sortArray, isOneClick } = this.state;
    if (type === SORT_OPTIONS.name) {
      this.setState({ isOneClick: !isOneClick });
      listsArray.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log("listsArray1", listsArray, "isOneClick", isOneClick);
      if (!isOneClick) {
        reverse = true;
        console.log("isOneClick", isOneClick);
      }

      if (reverse) {
        listsArray.reverse();
        console.log("listsArray2", listsArray, "isOneClick", isOneClick);
      }
    }
    if (type === SORT_OPTIONS.count) {
      this.setState({ isOneClick: !isOneClick });
      listsArray.sort((a, b) =>
        a.productsList.length > b.productsList.length ? 1 : -1
      );
      if (!isOneClick) {
        reverse = true;
      }
      if (reverse) {
        listsArray.reverse();
      }
    }
    this.setState(listsArray);
  };

  handleChangeListName = id => event => {
    const { value } = event.target;
    const { listsArray } = this.state;
    const changebleListIndex = listsArray.findIndex(item => item.id === id);
    listsArray[changebleListIndex].name = value;
    this.setState({ listsArray });
  };

  handleListCreate = newListName => {
    const { listsArray } = this.state;
    if (newListName) {
      this.setState({
        listsArray: [
          ...listsArray,
          {
            name: newListName,
            date: {},
            productsList: [],
            id: listsArray.length
          }
        ]
      });
    }
  };

  handleListUpdate = (listId, productId, product) => {
    const { listsArray } = this.state;

    const newListsArray = [...listsArray];
    const list = newListsArray[listId];
    list.productsList[productId] = product;

    this.setState({
      listsArray: newListsArray
    });
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
    console.log("RENDER!!!!!");
    const {
      listsArray,
      currentList,
      sortOption,
      isDeletion,
      listsId
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <ArrayContext.Provider
          value={{
            listsArray,
            currentList,
            sortOption,
            // listsId,
            // isDeletion,
            // handleDeletion: this.handleDeletion,
            handleChangeListName: this.handleChangeListName,
            handleListCreate: this.handleListCreate,
            deleteElement: this.deleteElement,
            sortArrayFunction: this.sortArrayFunction,
            changeSortOption: this.changeSortOption,
            handleListUpdate: this.handleListUpdate,
            notificationSystem: this.notificationSystemRef.current
          }}
        >
          <Router history={HISTORY}>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/mainList" component={MainList} />
            <Route path="/about" component={About} />
            <Route path="/mainList/:id" component={ShoppingList} />
          </Router>
          <NotificationSystem
            ref={this.notificationSystemRef}
            style={successStyle}
          />
        </ArrayContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
