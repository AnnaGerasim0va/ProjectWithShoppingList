import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Product from "./Product";
import { ArrayContext } from "../../../ShoppingListContext";
import styled from "styled-components";

class DnDContainer extends Component {

  render() {
    const {
      onSaveChanges,
      deleteElement,
      handleListUpdate,
      productsList,
      allowDrow,
      drop
    } = this.props;

    console.log("productsList", productsList);
    return (
      <div id="DnDContainer" onDrop={drop} onDragOver={allowDrow}>
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
      </div>
    );
  }
}

export default DnDContainer;
