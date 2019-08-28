import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ShoppingList from './ShoppingList';
import './Lists.css';

const history = createBrowserHistory();

class MainList extends Component {
    render() {
        return (
            <div>
                <div><h2>Списки покупок</h2></div>
                
                    <ShoppingList nameOfList='На день рождения' />
                    <ShoppingList nameOfList='Детям' />
                    <ShoppingList nameOfList='На неделю' />
               

            </div>
        )
    }

}


export default MainList; 