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
            <div>Создание нового продукта</div>
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

export const ButtonAdd = styled.button`
  padding: 8px 10px 9px 10px;
  margin: 15px 10px;
  font-size: 20px;
  background-color: #defcef;
  :hover {
    cursor: pointer;
    background-color: #d4ffdf;
  }
`;

export const AddedBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #36bfa4;
  border-radius: 5px;
  background: #befae9;
  padding: 10px;
  margin: 10px;
`;

export default AddProduct;
