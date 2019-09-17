import React, { Component } from "react";
import NewDescription from "./NewDescription";
import styled from "styled-components";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpandedForAdd: false,
      newProduct: {}
    };
  }

  AddDescription = type => event => {
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

  AddName = () => event => {
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

  render() {
    const { isExpandedForAdd, newProduct } = this.state;
    const { onSaveClick, idForAdd } = this.props;
    return (
      <>
        <ButtonAdd onClick={this.handleExpanedForAdd}>➕</ButtonAdd>
        {isExpandedForAdd && (
          <AddedBlock>
            <span>Создание нового продукта</span>
            <NewDescription
              onSaveClick={onSaveClick}
              changeDescription={this.AddDescription}
              changeName={this.AddName}
              product={newProduct}
              id={idForAdd}
              onSaveClick={onSaveClick}
            />
          </AddedBlock>
        )}
      </>
    );
  }
}

export const ButtonAdd = styled.div`
  display: inline-block;
  padding: 8px 10px 9px 10px;
  margin: 15px 10px;
  box-shadow: 2px 2px 2px #7bedbc;
  font-size: 20px;
  background-color: #a7fcd7;
  :hover {
    cursor: pointer;
    background-color: #d4ffdf;
    box-shadow: 2px 2px 2px #aff0d4;
  }
`;

export const AddedBlock = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #a7fcd7;
  box-shadow: 3px 3px 5px #7bedbc;
  padding: 10px;
  margin: 10px;
`;

export default AddProduct;
