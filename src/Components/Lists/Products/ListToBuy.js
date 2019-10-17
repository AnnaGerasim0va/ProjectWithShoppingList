import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Product from "./Product";
import AddProduct from "./AddProduct";
import { ArrayContext } from "../../../ShoppingListContext";
import styled from "styled-components";

class ListToBuy extends Component {
  render() {
    const {
      onSaveChanges,
      deleteElement,
      handleListUpdate,
      productsList,
      allowDrow,
      drop,
      idForAdd,
      onSaveClick
    } = this.props;

    console.log("productsList", productsList);
    return (
      <Wrapper >
        <ListHeader>Купить</ListHeader>
        <DnDContainer id="DnDContainer" onDrop={drop} onDragOver={allowDrow}>
          {productsList.map((product, index) => (
            <Product
              key={index + "_product"}
              productIndex={index}
              onDeleteClick={deleteElement}
              onSaveChanges={onSaveChanges(handleListUpdate)}
              product={product}
              //   clickBoughtProduct={this.clickBoughtProduct}
            />
          ))}
          <AddProduct onSaveClick={onSaveClick} idForAdd={idForAdd} />
        </DnDContainer>
        
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  list-style: none;
  border-radius: 7px;
  box-shadow: 2px 2px 5px #347363;
  background-color: #7ee6bb;
  margin: 10px;
`;

const DnDContainer = styled.ul`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  list-style: none;
`;

const ListHeader = styled.h2`
  text-align: center;
  color: #667571;
`;

export default ListToBuy;
