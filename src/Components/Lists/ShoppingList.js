import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lists.css'
import ListContent from './ListContent'


const getListContent = () => {
    console.log('Good')
    return(
        <ListContent />
    )
}

const ShoppingList = (props) => {
    return (
        <div className='listBlock'>
            <div>{props.nameOfList}</div>
            <div><Link to ="/mainList/id">Открыть</Link>
                <button>X</button></div>
        </div>
    )
}

export default ShoppingList;  