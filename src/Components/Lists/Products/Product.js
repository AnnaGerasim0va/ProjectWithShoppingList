import React, { Component } from "react";
import Description from "./Description";
import styled, { css } from "styled-components";
import Cancel from "@material-ui/icons/Cancel";
import { Tooltip } from "@material-ui/core";
import NotificationSystem from "react-notification-system";

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
      //newProduct: props.product,
      isExpanded: false
    };
  }

  // _notificationSystem = null;

  // notificationWarning = event => {
  //   event.preventDefault();
  //   this._notificationSystem.addNotification({
  //     message: "Notification message",
  //     level: "success"
  //   });
  // };

  drag = event => {
    // const {product} = this.state;
    const { dataTransfer, target } = event;
    console.log("event", event);
    dataTransfer.setData("transfer", target.id);

    //надо передавать объект product
    //dataTransfer.setData("item", )
  };

  notallowDrop = event => {
    event.stopPropagation();
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.product.name !== this.props.product.name ||
      nextProps.product.description !== this.props.product.description
    );
  }

  // componentDidMount() {
  //   this._notificationSystem = this.refs.notificationSystem;
  // }

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

  changeName = ({ event, id }) => {
    event.stopPropagation();
    this.props.onSaveChanges(
      { ...this.props.product, name: event.target.value },
      id
    );
  };

  render() {
    const { drag, notallowDrop } = this;
    const { product, onDeleteClick, productIndex } = this.props;
    //const { newProduct, isExpanded, newName } = this.state;

    console.log("Product render", productIndex);

    return (
      <ListElement
        id={productIndex}
        draggable="true"
        onDragStart={drag}
        onDragOver={notallowDrop}
      >
        <Tooltip placement="left" title="Удалить продукт">
          <ButtonDelete onClick={onDeleteClick(productIndex)}>
            <Cancel />
          </ButtonDelete>
          {/* <NotificationSystem ref="notificationSystem" /> */}
        </Tooltip>
        <StyledDiv></StyledDiv>
        <Description
          product={product}
          changeDescription={this.changeDescription}
          changeName={this.changeName}
          id={productIndex}
        />
      </ListElement>
    );
  }
}

const Title = styled.p`
  font-size: 20px;
  margin: 0 10px;
  /* ${p =>
    p.isDone &&
    css`
       {
        text-decoration: line-through;
        :before {
          content: "✔   ";
          color: green;
        }
      }
    `}  */
    :hover {
    color: green;
    cursor: pointer;
  }
`;

const ListElement = styled.li`
  position: relative;
  width: 15%;
  min-width: 200px;
  background-color: #a7fcd7;
  box-shadow: 3px 3px 5px #7bedbc;
  padding: 10px;
  margin: 10px;
  :hover {
    background-color: #93edc6;
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  margin: 1px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 86%;
  font-size: 30px;
  width: 30px;
  height: 30px;
  svg {
    color: teal;
  }
  :hover {
    cursor: pointer;
    svg {
      transition: all 0.4s;
      transform: rotate(90deg);
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

const ButtonChange = styled.button`
  padding: 2px 4px 3px 4px;
  background-color: #4ead79;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #3d9163;
  }
`;

export default Product;
