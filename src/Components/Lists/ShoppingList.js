import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Product from "./Product";
import styled from "styled-components";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    const listsArray = JSON.parse(localStorage.getItem("listsArray"));
    // Возвращает данные выбранного списка
    const currentList = listsArray.find(list => list.id === Number(id));
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

  onSaveClick = (product, id) => () => {
    //product - новый продукт с измененным description и name
    // event.stopPropagation();
    const { currentList } = this.state;
    //удаляем старый продукт, добавляем новый измененный
    currentList.productsList.splice(id, 1, product);
    this.setState({ currentList });
  };

  addProduct = product => () => {
    //принимаем новый продукт
    const { currentList } = this.state;
    //добавляем новый продукт в массив продуктов текущего списка
    currentList.productsList.push(product);
    this.setState({ currentList });
  };

  render() {
    const { currentList } = this.state;
    const { productsList } = currentList;
    const idForAdd = productsList.lenght;

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
                onSaveClick={this.onSaveClick}
                product={product}
              />
            ))}
            <AddProduct onSaveClick={this.addProduct} 
            idForAdd={idForAdd}/>
          </Element_ul>
        </ListBlock>
      </>
    );
  }
}

export const ListBlock = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: #d4fcf1;
  display: flex;
  justify-content: space-between;
  border: 1px solid aquamarine;
  border-radius: 7px;
  box-shadow: 10px 10px 5px rgb(49, 100, 100);
`;

export const Element_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export default ShoppingList;
