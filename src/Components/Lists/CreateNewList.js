import styled from "styled-components";
import React, { Component } from "react";

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

export const InputForm = styled.div`
display:flex;
justify-content:center;
`;
export const InputField = styled.input`
padding:5px 200px;
background-color:#e6fff2;
`;

export default CreateNewList;
