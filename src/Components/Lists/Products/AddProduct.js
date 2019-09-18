import React, { Component } from "react";
import NewDescription from "./NewDescription";
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
        <ButtonAdd onClick={this.handleExpanedForAdd}><Add /></ButtonAdd>
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

export const ButtonAdd = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:30px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  :hover {
    transition: all 0.7s;
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
