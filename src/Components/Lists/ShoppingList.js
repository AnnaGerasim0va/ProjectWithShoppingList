import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import {
  ListBlock,
  Element_ul,
  Element_li,
  ButtonChange,
  ButtonDelete,
  Title,
  ChangeBlock
} from "./ListsStyles";

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

  submitDescriptionChanges = () => (product, id) => {
    const { currentList } = this.state;
    currentList.productsList.splice(id, 1, product);
    this.setState({ currentList });
  };

  render() {
    const { currentList } = this.state;
    const { productsList } = currentList;

    return (
      <>
        <div>
          <Link to="/mainList/">Назад</Link>
        </div>
        <ListBlock>
          <Element_ul>
            {productsList.map((product, index) => (
              <Product
                key={index + product.name}
                productIndex={index}
                isDone={product.isDone}
                onProductClick={this.markElement}
                onDeleteClick={this.deleteElement}
                onSaveClick={this.submitDescriptionChanges}
                product={product}
              />
            ))}
          </Element_ul>
        </ListBlock>
      </>
    );
  }
}

export default ShoppingList;
