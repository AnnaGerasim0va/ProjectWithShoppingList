import React, { Component } from 'react';
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
            <div><button onClick="getListContent">Открыть</button>
                <button>X</button></div>
        </div>
    )
}

export default ShoppingList;  