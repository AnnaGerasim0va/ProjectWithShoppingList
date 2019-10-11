<<<<<<< HEAD
import styled from "styled-components";
import React, { Component } from "react";

import { ButtonDeleteDone, InputSearch } from "./StyledMainList";
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";

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
              color="primary"
              value={newListName}
              shrink
              onChange={handleChange}
            />
            <ButtonDeleteDone
              color="primary"
              disableRotate
              onClick={handleListCreate(newListName)}
            >
              <Done />
            </ButtonDeleteDone>
          </>
        )}
      </ArrayContext.Consumer>
    );
  }
}

export default CreateNewList;
=======
import styled from "styled-components";
import React, { Component } from "react";

import { ButtonDeleteDone, InputSearch } from "./StyledMainList";
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";

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
              color="primary"
              value={newListName}
              shrink
              onChange={handleChange}
            />
            <ButtonDeleteDone
              color="primary"
              disableRotate
              onClick={handleListCreate(newListName)}
            >
              <Done />
            </ButtonDeleteDone>
          </>
        )}
      </ArrayContext.Consumer>
    );
  }
}

export default CreateNewList;
>>>>>>> 1fac42e5c7d12eb09c17e6ff5101d45a6920d11a
