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
  constructor(props) {
    super(props);
    /**
     * поле product{name - str, desc - obj, id - num}
     * @param name = имя продукта, string
     * @param desc - описание продукта, object
     * @param id - идентификатор продукта, number
     */
    this.state = {
      product: props.product,
      newProduct: props.product,
      isExpanded: false,
      newName: "",
      description: {
        quantity: "",
        price: ""
      }
    };
  }

  changeDescription = type => event => {
    const { description } = this.state;
    description[type] = event.target.value;
    this.setState({ description });
  };

  changeName = event => {
    const { newProduct } = this.state;
    newProduct.name = event.target.value;
    this.setState({ newProduct });
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
      onDeleteClick,
      onSaveClick,
      productIndex
    } = this.props;
    const {
      product,
      newProduct,
      isExpanded,
      newName,
      description,
      description: { quantity, price }
    } = this.state;

    return (
      <ElementLi isDone={isDone} onClick={onProductClick(productIndex)}>
        <Title>{product.name}</Title>
        <ButtonChange onClick={this.handleExpand()}>🖍</ButtonChange>
        <ButtonDelete onClick={onDeleteClick(productIndex)}>х</ButtonDelete>
        {isExpanded ? (
          <NewDescription
            product={newProduct}
            description={description}
            changeDescription={this.changeDescription}
            changeName={this.changeName}
            onSaveClick={onSaveClick}
            id={productIndex}
          />
        ) : (
          <Description
            product={product}
            description={description}
            id={productIndex}
          />
        )}
      </ElementLi>
    );
  }
}

export default Product;
