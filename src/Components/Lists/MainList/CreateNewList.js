import styled from "styled-components";
import React, { Component } from "react";
import { ButtonDeleteDone, InputField } from "./StyledMainList";
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";
import TextField from "@material-ui/core/TextField";
import { theme } from "../../Themes";
import { ThemeProvider } from "@material-ui/styles";

class CreateNewList extends Component {
  render() {
    const { newListName, handleChange } = this.props;

    return (
      <ArrayContext.Consumer>
        {({ handleListCreate }) => (
          <>
            <InputSearch
              placeholder="Введите имя нового списка"
              value={newListName}
              shrink
              onChange={handleChange}
            />
            <ButtonDeleteDone disableRotate onClick={handleListCreate(newListName)}>
              <Done />
            </ButtonDeleteDone>
          </>
        )}
      </ArrayContext.Consumer>
    );
  }
}

const InputSearch = styled(TextField)`
  width: 100%;
  margin-left: 50%;
`;

export default CreateNewList;
