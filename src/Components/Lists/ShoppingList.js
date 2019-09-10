import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ListBlock,
  Element_ul,
  Element_li,
  Button,
  Title
} from "./ListsStyles.js";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    const listsArray = JSON.parse(localStorage.getItem("listsArray"));
    // Возвращает данные выбранного списка
    const currentList = listsArray.find(list => list.id == id);
    this.state = {
      listsArray,
      currentList
    };
  }

  deleteElement = index => event => {
    //избегаем всплытия markElement
    event.stopPropagation();
    const { currentList } = this.state;
    // удаляем элемент по индексу
    currentList.productsList.splice(index, 1);
    this.setState({ currentList });
  };

  markElement = index => () => {
    const { currentList } = this.state;
    // вытаскиваем текущий продукт
    const currentItem = currentList.productsList[index];
    // инвертируем флаг isDone
    currentItem.isDone = !currentItem.isDone;
    this.setState({ currentList });
  };

  render() {
    const { currentList } = this.state;
    const { productsList } = currentList;

    return (
      <div>
        <div>
          <Link to="/mainList/">Назад</Link>
        </div>
        <ListBlock>
          <Element_ul>
            {productsList.map(
              (product, index) => (
                <Element_li
                  key={index + product.name}
                  isDone={product.isDone}
                  onClick={this.markElement(index)}
                >
                  <Title>{product.name}</Title>
                  <Button onClick={this.deleteElement(index)}>х</Button>
                </Element_li>
              )
            )}
          </Element_ul>
        </ListBlock>
      </div>
    );
  }
}

export default ShoppingList;
