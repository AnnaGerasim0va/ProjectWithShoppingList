import React, { Component } from "react";

const Home = () => {
  const addToCounter = () => {
    let cnt = localStorage.getItem("count");
    ++cnt;
    localStorage.setItem("count", cnt);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={addToCounter}>Add</button>
      <p>Счетчик равен {localStorage.getItem("count")}</p>
    </div>
  );
};

export default Home;
