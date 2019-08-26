import React, { Component } from 'react';

const addToCounter = () => {
    let cnt = localStorage.getItem('count');
    ++cnt;
    localStorage.setItem('count', cnt);
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <button onClick={addToCounter}>Add</button>
            <p>Счетчик равен {localStorage.getItem('count')}</p>
        </div>
    )
}

export default Home; 