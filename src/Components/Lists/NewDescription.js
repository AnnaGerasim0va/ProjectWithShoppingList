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
      product: { name, isDone },
      id,
      newName,
      description,
      description: { quantity, price },
      changeDescription,
      changeName
    } = this.props;
    console.log("product", product);
    console.log("description", description);

    return (
      <ChangeBlock>
        <input
          placeholder="Введите имя"
          value={newName}
          onChange={changeName}
        />
        <input
          placeholder="Введите количество"
          value={quantity}
          onChange={changeDescription("quantity")}
        />
        <input
          placeholder="Введите цену"
          value={price}
          onChange={changeDescription("price")}
        />
        <button onClick={onSaveClick(product, id)}>
          Сохранить изменения
        </button>
      </ChangeBlock>
    );
  }
}

export default Description;
