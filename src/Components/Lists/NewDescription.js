import React, { Component } from "react";
import { ChangeBlock } from "./ListsStyles.js";

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
      newName,
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

export default Description;
