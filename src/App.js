import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home';
import MainList from './Components/Lists/MainList';
import About from './Components/About';
import Menu from './Components/Menu/Menu';
import createBrowserHistory from 'history/createBrowserHistory';

const HISTORY = createBrowserHistory();

list1 = {
  name: 'На день рождения',
  listArray: ['Свечи', 'Шарики', 'Конфеты', 'Лента', 'Колпаки', 'Конфетти']
}

list2 = {
  name: 'На неделю',
  listArray: ['Картофель', 'Помидоры', 'Огурцы', 'Яблоки', 'Мясо', 'Хлеб', 'Фасоль', 'Зелень']
}

list3 = {
  name: 'Детям',
  listArray: ['Джинсы', 'Футболка', 'Толстовка', 'Кроссовки']
}

const ARRAY = [list1, list2, list3].map((item,index)=>{item; id:index});


class App extends Component {
  state = {
    listMas=[]
  }



  componentWillMount() {
    localStorage.setItem('listsArray', 'ARRAY')
  }

  componentDidMount(){
    if (!(this.state.listMas).length) {
      this.setState({ listMas: localStorage.getItem('listsArray') });
    }
  }
  render() {
    let mas = this.state.listMas;
    return (
      <Router history={HISTORY}>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/mainList" component={MainList} lists={mas} />
        <Route path="/about" component={About} />
        <Route path="/mainList/id" component={ShoppingList} />
      </Router>
    )
  }



}

export default App;
