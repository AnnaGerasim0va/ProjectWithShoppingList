import React, { Component } from "react";
import styled from "styled-components";

class Description extends Component {
  state = {
    isExpanded: false
  };

  render() {
    const {
      onSaveClick,
      product,
      product: { name, isDone, description },
      id,
      changeDescription,
      changeName
    } = this.props;
    return (
      <ChangeBlock>
        <input placeholder="Введите имя" value={name} onChange={changeName()} />
        <input
          placeholder="Введите количество"
          value={description ? description.quantity : ""}
          onChange={changeDescription("quantity")}
        />
        <input
          placeholder="Введите цену"
          value={description ? description.price : ""}
          onChange={changeDescription("price")}
        />
        <button onClick={onSaveClick(product, id)}>Сохранить изменения</button>
      </ChangeBlock>
    );
  }
}

export const ChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Description;
