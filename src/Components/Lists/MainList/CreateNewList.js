import styled from "styled-components";
import React, { Component } from "react";
import {ButtonDeleteDone, InputField} from "./StyledMainList"
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";

class CreateNewList extends Component {
  render() {
    const { newListName, handleChange } = this.props;

    return (
      <ArrayContext.Consumer>
      {({handleListCreate}) => (      
      <>
        <InputField
          placeholder="Введите имя нового списка"
          value={newListName}
          onChange={handleChange}
        />
        <ButtonDeleteDone onClick={handleListCreate(newListName)}>
          <Done />
        </ButtonDeleteDone>
      </>
      )}
      </ArrayContext.Consumer>
    );
  }
}

export default CreateNewList;
