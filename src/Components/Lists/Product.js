import React, { Component } from "react";
import NewDescription from "./NewDescription";
import Description from "./Description";
import styled, { css } from "styled-components";

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
      <ListElement>
        <ButtonDelete onClick={onDeleteClick(productIndex)}>х</ButtonDelete>
        <StyledDiv>
          <Title isDone={isDone} onClick={onProductClick(productIndex)}>
            {product.name}
          </Title>
          <ButtonChange onClick={this.handleExpand()}>🖍</ButtonChange>
        </StyledDiv>

        {isExpanded ? (
          <NewDescription
            product={newProduct}
            changeDescription={this.changeDescription}
            changeName={this.changeName}
            onSaveClick={onSaveClick}
            id={productIndex}
          />
        ) : (
          <Description product={product} id={productIndex} />
        )}
      </ListElement>
    );
  }
}

export const Title = styled.p`
  font-size: 20px;
  margin: 0 10px;
  ${p =>
    p.isDone &&
    css`
       {
        text-decoration: line-through;
        :before {
          content: "✔   ";
          color: green;
        }
      }
    `}

  :hover {
    color: green;
    cursor: pointer;
  }
`;

export const ListElement = styled.li`
  width: 25%;
  background-color: #a7fcd7;
  box-shadow: 3px 3px 5px #7bedbc;
  padding: 10px;
  margin: 10px;
`;

export const StyledDiv = styled.div`
  margin: 1px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDelete = styled.button`
  position: relative;
  left: 85%;
  padding: 4px 7px 5px 7px;
  background-color: #c42323;
  color: white;
  margin: 0px 10px;
  :hover {
    cursor: pointer;
    background-color: #a81919;
  }
`;

export const ButtonChange = styled.button`
  padding: 2px 4px 3px 4px;
  background-color: #4ead79;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #3d9163;
  }
`;

export default Product;
