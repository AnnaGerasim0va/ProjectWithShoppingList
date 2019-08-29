import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home';
import MainList from './Components/Lists/MainList';
import About from './Components/About';
import Menu from './Components/Menu/Menu';
import createBrowserHistory from 'history/createBrowserHistory';

const HISTORY = createBrowserHistory();

const LIST_FOR_B_DAY = {
  name: 'На день рождения',
  productsList: ['Свечи', 'Шарики', 'Конфеты', 'Лента', 'Колпаки', 'Конфетти']
}

const LIST_FOR_WEEK = {
  name: 'На неделю',
  productsList: ['Картофель', 'Помидоры', 'Огурцы', 'Яблоки', 'Мясо', 'Хлеб', 'Фасоль', 'Зелень']
}

const LIST_FOR_CHILDREN = {
  name: 'Детям',
  productsList: ['Джинсы', 'Футболка', 'Толстовка', 'Кроссовки']
}


class App extends Component {
  componentWillMount() {
    const localStorageArray = JSON.stringify(
      [LIST_FOR_B_DAY, LIST_FOR_WEEK, LIST_FOR_CHILDREN].map(
        (item, index) => {
          return { ...item, id: index }
        }
      )
    );
    localStorage.setItem('listsArray', localStorageArray);
  }

  render() {
    return (
      <Router history={HISTORY}>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/mainList" component={MainList} />
        <Route path="/about" component={About} />
        {/* <Route path="/mainList/:id" component={ShoppingList} /> */}
      </Router>
    )
  }
}

export default App;
