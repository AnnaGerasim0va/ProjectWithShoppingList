import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { ArrayContext } from "../../../ShoppingListContext";
import styled from "styled-components";
import Back from "@material-ui/icons/ArrowBack";
import { Container } from "@material-ui/core";

class ShoppingList extends Component {
  constructor(props, context) {
    super(props);
    const { id } = this.props.match.params;
    // Возвращает данные выбранного списка
    const { listsArray } = context;
    let currentList = listsArray.find(list => list.id === Number(id));
<<<<<<< HEAD
    // Если кто-то решит ввести свой id в урле
=======
    // Если Илья решит ввести свой id в урле
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
    if (!currentList) {
      currentList = listsArray[0];
    }
    this.state = {
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

<<<<<<< HEAD
  onSaveChanges = (product, id) => {
=======
  onSaveClick = (product, id) => {
    debugger;
    console.log("asdasdasdasaaaaaaaaaaa");
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
    //product - новый продукт с измененным description и name
    // event.stopPropagation();
    const { currentList } = this.state;
    //удаляем старый продукт, добавляем новый измененный
    currentList.productsList.splice(id, 1, product);
    this.setState({ currentList });
  };

  addProduct = product => {
    //принимаем новый продукт
    const { currentList, isNameError } = this.state;
    //добавляем новый продукт в массив продуктов текущего списка
    if (product.name) {
      currentList.productsList.push(product);
      this.setState({ currentList });
    }
  };

  // componentWillMount(){
  //   findCurrentList
  // }

  render() {
    const {
      currentList: { name, productsList },
      boughtProduct
    } = this.state;
    const idForAdd = productsList.lenght;

    return (
      <ArrayContext.Consumer>
        {() => (
          <ListBlock>
            <StyledLink to="/mainList/">
              <Back />
            </StyledLink>
            <ListHeader>{name}</ListHeader>
<<<<<<< HEAD
            <ContainerDiv>
              <ListToBuy>
                <ListHeader>Купить</ListHeader>
                <StyledDiv>
                  {productsList.map((product, index) => (
                    <Product
                      key={index + product.name}
                      productIndex={index}
                      isDone={product.isDone}
                      onProductClick={this.markElement}
                      onDeleteClick={this.deleteElement}
                      onSaveChanges={this.onSaveChanges}
                      product={product}
                      clickBoughtProduct={this.clickBoughtProduct}
                    />
                  ))}
                  <AddProduct
                    onSaveClick={this.addProduct}
                    idForAdd={idForAdd}
                  />
                </StyledDiv>
              </ListToBuy>
              <ListBought>
                <ListHeader>Куплено</ListHeader>
                {/* <Product /> */}
              </ListBought>
            </ContainerDiv>
=======
            <ListToBuy>
              <ListHeader>Купить</ListHeader>
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
              <ListHeader>Куплено</ListHeader>
              {/* <Product /> */}
            </ListBought>
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
          </ListBlock>
        )}
      </ArrayContext.Consumer>
    );
  }
}

ShoppingList.contextType = ArrayContext;

export const ListBlock = styled.div`
  padding: 10px;
  margin: 20px;
  margin-top: 12%;
  background-color: #d4fcf1;
  /* display: flex;
  justify-content: space-between; */
  border-radius: 7px;
  box-shadow: 6px 6px 10px rgb(49, 100, 100);
`;

const ListHeader = styled.h2`
  text-align: center;
  color: #667571;
<<<<<<< HEAD
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
=======
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #2b7054;
  }
`;

export const ListToBuy = styled.ul`
  position: relative;
  width: 90%;
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
