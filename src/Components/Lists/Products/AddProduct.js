import React, { Component } from "react";
import Description from "./Description";
import styled from "styled-components";
import Add from "@material-ui/icons/Add";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandedForAdd: false,
      newProduct: {}
    };
  }

  addDescription = type => event => {
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

  addName = event => {
    const { newProduct } = this.state;
    this.setState({
      newProduct: {
        ...newProduct,
        name: event.target.value
      }
    });
  };

  handleExpanedForAdd = () => {
    const { isExpandedForAdd } = this.state;
    this.setState({ isExpandedForAdd: !isExpandedForAdd });
  };

  handleSaveClick = product => () => {
    this.props.onSaveClick(product);
    this.setState({
      newProduct: {
        name: "",
        description: ""
      }
    });
  };

  render() {
    const { isExpandedForAdd, newProduct } = this.state;
    const { onSaveClick, idForAdd } = this.props;
    return (
      <>
        <ButtonAdd
          isExpandedForAdd={isExpandedForAdd}
          onClick={this.handleExpanedForAdd}
        >
          <Add />
        </ButtonAdd>
        {isExpandedForAdd && (
          <AddedBlock>
            <span>Создание нового продукта</span>
            <Description
              creation
              onSaveClick={this.handleSaveClick}
              changeDescription={this.addDescription}
              changeName={this.addName}
              product={newProduct}
              id={idForAdd}
            />
          </AddedBlock>
        )}
      </>
    );
  }
}

export const ButtonAdd = styled.div`
  position: absolute;
  bottom: 30px;
  right: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  width: 50px;
  height: 50px;
  transition: all 0.3s;
  border-radius: 25px;
  transform: ${({ isExpandedForAdd }) =>
    isExpandedForAdd ? "rotate(45deg)" : "none"};
  :hover {
    background-color: #d1d1d1;
    opacity: 0.8;
    cursor: pointer;
  }
  svg {
    font-size: 50px;
    color: #707070;
  }
`;

export const AddedBlock = styled.li`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #a7fcd7;
  box-shadow: 3px 3px 5px #7bedbc;
  padding: 10px;
  margin: 10px;
`;

export default AddProduct;