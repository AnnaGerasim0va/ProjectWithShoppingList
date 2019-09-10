import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MainList from "./Components/Lists/MainList";
import ShoppingList from "./Components/Lists/ShoppingList";
import About from "./Components/About";
import Menu from "./Components/Menu/Menu";
import createBrowserHistory from "history/createBrowserHistory";

const HISTORY = createBrowserHistory();

const LIST_FOR_B_DAY = {
  name: "На день рождения",
  date: {
    day: "12",
    month: "июля",
    year: "2019"
  },
  productsList: [
    {
      name: "Свечи",
      discription: {},
      isDone: false
    },
    {
      name: "Шарики",
      discription: {},
      isDone: false
    },
    {
      name: "Конфеты",
      discription: {},
      isDone: false
    },
    {
      name: "Лента",
      discription: {},
      isDone: false
    },
    {
      name: "Колпаки",
      discription: {},
      isDone: false
    },
    {
      name: "Конфетти",
      discription: {},
      isDone: false
    }
  ]
};

const LIST_FOR_WEEK = {
  name: "На неделю",
  date: {
    day: "09",
    month: "июля",
    year: "2019"
  },
  productsList: [
    {
      name: "Картофель",
      discription: {},
      isDone: false
    },
    {
      name: "Помидоры",
      discription: {},
      isDone: false
    },
    {
      name: "Огурцы",
      discription: {},
      isDone: false
    },
    {
      name: "Яблоки",
      discription: {},
      isDone: false
    },
    {
      name: "Мясо",
      discription: {},
      isDone: false
    },
    {
      name: "Хлеб",
      discription: {},
      isDone: false
    },
    {
      name: "Фасоль",
      discription: {},
      isDone: false
    },
    {
      name: "Зелень",
      discription: {},
      isDone: false
    }
  ]
};

const LIST_FOR_CHILDREN = {
  name: "Детям",
  date: {
    day: "18",
    month: "июля",
    year: "2019"
  },
  productsList: [
    {
      name: "Джинсы",
      discription: {},
      isDone: false
    },
    {
      name: "Кроссовки",
      discription: {},
      isDone: false
    },
    {
      name: "Футболка",
      discription: {},
      isDone: false
    },
    {
      name: "Толстовка",
      discription: {},
      isDone: false
    }
  ]
};

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
