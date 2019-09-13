import React, { Component } from "react";
import NewDescription from "./NewDescription";
import Description from "./Description";
import {
  ListBlock,
  ElementLi,
  ButtonChange,
  ButtonDelete,
  Title
} from "./ListsStyles";

class Product extends Component {
  state = {
    isExpanded: false,
    newName: "",
    description: {
      quantity: "",
      price: ""
    }
  };

  changeDescription = type => event => {
    const { description } = this.state;
    description[type] = event.target.value;
    this.setState({ description });
  };

  changeName = event => {
    console.log("newName", event.target.value);
    this.setState({ newName: event.target.value });
  };

  handleExpand = () => event => {
    event.stopPropagation();
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };

  render() {
    const {
      isDone,
      onProductClick,
      product,
      onDeleteClick,
      onSaveClick,
      productIndex
    } = this.props;
    const { isExpanded, 
      newName,
      description,
      description:{quantity,price}, } = this.state;
    console.log(this.props);

    return (
      <ElementLi isDone={isDone} onClick={onProductClick(productIndex)}>
        <Title>{product.name}</Title>
        <ButtonChange onClick={this.handleExpand()}>🖍</ButtonChange>
        <ButtonDelete onClick={onDeleteClick(productIndex)}>х</ButtonDelete>
        {isExpanded ? (
          <NewDescription product={product}
           description={description}
           changeDescription={this.changeDescription}
           changeName={this.changeName}
           onSaveClick={onSaveClick}
           id={productIndex}
           />
        ) : (
          <Description product={product} 
          description={description}
          id={productIndex}
           />
        )}
      </ElementLi>
    );
  }
}

export default Product;
