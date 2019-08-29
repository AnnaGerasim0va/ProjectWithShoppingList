import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Lists.css'


class ShoppingList extends Component {
    state = { isListShown: false }

    toggleShowList = () => {
        const { isListShown } = this.state;
        this.setState({ isListShown: !isListShown })
    }

    render() {
        const { isListShown } = this.state;
        const { name, id, productsList } = this.props;
        return (
            <div className='listBlock' onClick={this.toggleShowList}>
                <div>{name}</div>
                <ul>
                    {isListShown && productsList.map((product, index) => <li key={index}>{product}</li>)}
                </ul>
            </div>
        )
    }
}

export default ShoppingList;  