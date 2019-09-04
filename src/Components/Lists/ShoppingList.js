import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Lists.css'


const ShoppingList = props => {
   const {id} = props.match.params;
   const listsArray = JSON.parse(localStorage.getItem('listsArray'));
   const currentList = listsArray.find(list=> list.id == id);
const {productsList} = currentList;
return <div>
    <div><Link to="/mainList/">Назад</Link></div>
    <div className="listBlock"><ul>{productsList.map((product, index) => <li className="element" onClick ="">{product}</li>)}</ul></div>
    </div>


}

export default ShoppingList;  