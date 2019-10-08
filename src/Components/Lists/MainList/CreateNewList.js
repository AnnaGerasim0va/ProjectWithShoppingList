import styled from "styled-components";
import React, { Component } from "react";
<<<<<<< HEAD
import { ButtonDeleteDone, InputSearch } from "./StyledMainList";
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";
=======
import { ButtonDeleteDone, InputField } from "./StyledMainList";
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";
import TextField from "@material-ui/core/TextField";
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
import { theme } from "../../Themes";
import { ThemeProvider } from "@material-ui/styles";

class CreateNewList extends Component {
  render() {
    const { newListName, handleChange } = this.props;

    return (
      <ArrayContext.Consumer>
        {({ handleListCreate }) => (
          <>
<<<<<<< HEAD
            <ThemeProvider theme={theme}>
            <InputSearch
              placeholder="Введите имя нового списка"
              color="primery"
=======
            <InputSearch
              placeholder="Введите имя нового списка"
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
              value={newListName}
              shrink
              onChange={handleChange}
            />
<<<<<<< HEAD
            <ButtonDeleteDone color="primery" disableRotate onClick={handleListCreate(newListName)}>
              <Done />
            </ButtonDeleteDone>
            </ThemeProvider>
=======
            <ButtonDeleteDone disableRotate onClick={handleListCreate(newListName)}>
              <Done />
            </ButtonDeleteDone>
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
          </>
        )}
      </ArrayContext.Consumer>
    );
  }
}

<<<<<<< HEAD

=======
const InputSearch = styled(TextField)`
  width: 100%;
  margin-left: 50%;
`;
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5

export default CreateNewList;
