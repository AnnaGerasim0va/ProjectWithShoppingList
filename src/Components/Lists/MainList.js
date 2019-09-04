import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ShoppingList from './ShoppingList';
import './Lists.css';

const history = createBrowserHistory();

/*const getArray = () =>{
    let arr = this.props.mas;
    arr.map(item, index)=>{}
}*/

const MainList = () => {
    const listsArray = JSON.parse(localStorage.getItem('listsArray'));

    return (
        <div>
            <div className="header"><h2>Списки покупок</h2></div>
            {listsArray.map(
                (list, index) => {
                    const {id, name} = list;
                    return  <div><Link key={index} to={`/mainList/${id}`}>{name}</Link></div>
                }
            )}
        </div>
    )
}


export default MainList; 