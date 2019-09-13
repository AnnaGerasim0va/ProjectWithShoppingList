import React, { Component } from "react";
import {InputForm, InputField} from "./ListsStyles.js";

class CreateNewList extends Component {
  render() {
    const { newListName, handleListCreate, handleChange } = this.props;

    return (
      <InputForm>
        <InputField
          placeholder="Введите имя нового списка"
          value={newListName}
          onChange={handleChange}
        />
        <button onClick={handleListCreate}>Создать</button>
      </InputForm>
    );
  }
}

export default CreateNewList;
