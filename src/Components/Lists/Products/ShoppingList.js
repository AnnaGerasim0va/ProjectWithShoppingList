import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListToBuy from "./ListToBuy";
import ListBought from "././ListBought";
import { ArrayContext } from "../../../ShoppingListContext";
import styled from "styled-components";
import Back from "@material-ui/icons/ArrowBack";
import { Container } from "@material-ui/core";
import { all } from "q";

class ShoppingList extends Component {
  constructor(props, context) {
    super(props);
    const { id } = this.props.match.params;
    // Возвращает данные выбранного списка
    const { listsArray } = context;
    let currentList = listsArray.find(list => list.id === Number(id));

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

  /*onSaveChanges = (product, id) => {};*/

  onSaveChanges = handleListUpdate => (product, id) => {
    //product - новый продукт с измененным description и name
    // event.stopPropagation();
    const productId = id;
    const { id: listId } = this.props.match.params;
    //const { currentList } = this.state;
    //удаляем старый продукт, добавляем новый измененный
    //currentList.productsList.splice(id, 1, product);
    // let newProductsList = [...currentList.productsList];
    // newProductsList[productId] = product;
    // const newList = { ...currentList, productsList: newProductsList };

    handleListUpdate(listId, productId, product);
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

  drop = event => {
    event.preventDefault();
    const { boughtProduct, currentList } = this.state;
    const data = event.dataTransfer.getData("transfer");
    console.log("aaa", event.target);
    
    // item - объект с айдишником и названием
    // const item = event.dataTransfer.getData("product");

    // if (block.id === "BoughtContainer") {
    //   if (!boughtProduct.indexOf(item)) {
    //     boughtProduct.push(item);
    //     //currentList.splice()
    //   }
    // }
    // if (block.id === "DnDContainer") {
    //   // необходимо каждый раз обновлять стейт
    // }

    event.target.appendChild(document.getElementById(data));
    console.log("boughtProduct", boughtProduct);
  };

  allowDrow = event => {
    //Предотвращаем действие браузера по умолчанию
    event.preventDefault();
  };

  // componentWillMount(){
  //   findCurrentList
  // }

  render() {
    const {
      currentList: { name, productsList },
      boughtProduct
    } = this.state;
    const idForAdd = productsList.length;

    return (
      <ArrayContext.Consumer>
        {({ handleListUpdate }) => (
          <ListBlock>
            <StyledLink to="/mainList/">
              <Back />
            </StyledLink>
            <ListHeader>{name}</ListHeader>
            <ContainerDiv>
              <ListToBuy
                onSaveChanges={this.onSaveChanges}
                deleteElement={this.deleteElement}
                handleListUpdate={handleListUpdate}
                productsList={productsList}
                drop={this.drop}
                allowDrow={this.allowDrow}
                onSaveClick={this.addProduct}
                idForAdd={idForAdd}
              />
              <ListBought drop={this.drop} allowDrow={this.allowDrow} />
              {/* <Product /> */}
            </ContainerDiv>
          </ListBlock>
        )}
      </ArrayContext.Consumer>
    );
  }
}

ShoppingList.contextType = ArrayContext;

const ListBlock = styled.div`
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
`;

const ContainerDiv = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #2b7054;
  }
`;

export default ShoppingList;
