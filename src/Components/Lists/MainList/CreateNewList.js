import styled from "styled-components";
import React, { Component } from "react";
import {ButtonDeleteDone, InputField} from "./StyledMainList"
import Done from "@material-ui/icons/DoneOutline";

class CreateNewList extends Component {
  render() {
    const { newListName, handleListCreate, handleChange } = this.props;

    return (
      <>
        <InputField
          placeholder="Введите имя нового списка"
          value={newListName}
          onChange={handleChange}
        />
        <ButtonDeleteDone onClick={handleListCreate}>
          <Done />
        </ButtonDeleteDone>
      </>
    );
  }
}

export default CreateNewList;
