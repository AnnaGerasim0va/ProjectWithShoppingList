import React from "react";
import mainImage from "../../img/products.jpg";
import {Block} from "../Header/HeaderStyles"

const Home = () => {
  return (
    <Block>
      <h2>Добро пожаловать!</h2>
      <img src={mainImage} alt="Добро пожаловать"/>
    </Block>
  );
};

export default Home;
