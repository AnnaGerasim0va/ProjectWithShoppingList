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
      isExpanded: false
    };
  }

  changeDescription = type => event => {
    event.stopPropagation();
    const { newProduct } = this.state;
    const newDescription = {
      [type]: event.target.value
    };
    this.setState({
      newProduct: {
        ...newProduct,
        description: { ...newProduct.description, ...newDescription }
      }
    });
  };

  changeName = () => event => {
    event.stopPropagation();
    const { newProduct } = this.state;
    this.setState({
      newProduct: {
        ...newProduct,
        name: event.target.value
      }
    });
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
    const { product, newProduct, isExpanded, newName } = this.state;
    console.log("newProduct", newProduct);
    console.log("product", product);

    return (
      <ElementLi isDone={isDone}>
        <Title onClick={onProductClick(productIndex)}>{product.name}</Title>
        <ButtonChange onClick={this.handleExpand()}>🖍</ButtonChange>
        <ButtonDelete onClick={onDeleteClick(productIndex)}>х</ButtonDelete>
        {isExpanded ? (
          <NewDescription
            product={newProduct}
            changeDescription={this.changeDescription}
            changeName={this.changeName}
            onSaveClick={onSaveClick}
            id={productIndex}
          />
        ) : (
          <Description
            product={product}
            id={productIndex}
          />
        )}
      </ElementLi>
    );
  }
}

export default Product;
