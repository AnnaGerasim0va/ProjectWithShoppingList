import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import styled, { css } from "styled-components";



let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};

class ListBought extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget, allowDrow, drop } = this.props;
    const isActive = canDrop && isOver;
    return (
      <BoughtContainer id="BoughtContainer" onDrop={drop} onDragOver={allowDrow}>
        <ListHeader>Куплено</ListHeader>
        <div>Переместите сюда продукты,</div>
        <div>которые уже были куплены</div>
      </BoughtContainer>
    );
  }
}

export default ListBought;

const ListHeader = styled.h2`
  text-align: center;
  color: #667571;
`;

const BoughtContainer = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  border-radius: 7px;
  box-shadow: 2px 2px 5px #347363;
  margin: 10px;
  box-shadow: 0 0 ${p => p.canDrop && "1.75"}rem 0.1rem;
  background-color: #7ee6bb ${p => p.isOver && "#6fd6ac"};
`;
