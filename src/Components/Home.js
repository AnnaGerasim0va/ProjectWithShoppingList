import React, { Component } from 'react';

const addToCounter = () => {
    const cnt = localStorage.getItem('count');
    ++cnt;
    localStorage.setItem('count', 'cnt');
}

const Home = () => {
    const cnt = localStorage.getItem('count');
    return (
        <div>
            <h2>Home</h2>
            <p>{cnt}</p>
            <button onClick={addToCounter}>Add</button>
        </div>
    )
}

export default Home; 