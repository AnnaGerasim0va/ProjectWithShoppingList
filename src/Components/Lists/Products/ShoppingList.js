import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Product from "./Product";
import styled from "styled-components";
import Back from "@material-ui/icons/ArrowBack";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    const listsArray = JSON.parse(localStorage.getItem("listsArray"));
    // Возвращает данные выбранного списка
    const currentList = listsArray.find(list => list.id === Number(id));
    this.state = {
      listsArray,
      currentList,
      boughtProduct: []
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

  clickBoughtProduct = () => {
    // const { boughtProduct, currentList } = this.state;
    // const currentProduct = currentList.productsList.find(
    //   (item, index) => index === productIndex
    // );
    // currentList.productsList.splice(index, 1);
    // boughtProduct.push(currentProduct);
    // this.setState({ currentList, boughtProduct });
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
    const { currentList, isNameError } = this.state;
    //добавляем новый продукт в массив продуктов текущего списка
    if (product.name) {
      currentList.productsList.push(product);
      this.setState({ currentList});
    }
  };

  render() {
    const { currentList, boughtProduct } = this.state;
    const { productsList } = currentList;
    const idForAdd = productsList.lenght;

    return (
      <ListBlock>
        <StyledLink to="/mainList/">
          <Back />
        </StyledLink>
        <ListToBuy>
          {productsList.map((product, index) => (
            <Product
              key={index + product.name}
              productIndex={index}
              isDone={product.isDone}
              onProductClick={this.markElement}
              onDeleteClick={this.deleteElement}
              onSaveClick={this.onSaveClick}
              product={product}
              clickBoughtProduct={this.clickBoughtProduct}
            />
          ))}
          <AddProduct onSaveClick={this.addProduct} idForAdd={idForAdd} />
        </ListToBuy>
        <ListBought>
          {/* <Product /> */}
        </ListBought>
      </ListBlock>
    );
  }
}

export const ListBlock = styled.div`
  padding: 10px;
  margin: 20px;
  margin-top: 12%;
  background-color: #d4fcf1;
  /* display: flex;
  justify-content: space-between; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 7px;
  box-shadow: 6px 6px 10px rgb(49, 100, 100);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #2b7054;
  }
`;

export const ListToBuy = styled.ul`
  position: relative;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  border-radius: 7px;
  box-shadow: 2px 2px 5px #347363;
  background-color: #7ee6bb;
  margin: 10px;
`;

export const ListBought = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  border-radius: 7px;
  box-shadow: 2px 2px 5px #347363;
  background-color: #7ee6bb;
  margin: 10px;
`;

export default ShoppingList;
