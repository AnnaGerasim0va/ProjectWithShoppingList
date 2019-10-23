import styled from "styled-components";
import React, { Component } from "react";

import { ButtonMainList, InputSearch } from "./StyledMainList";
import { ArrayContext } from "../../../ShoppingListContext";
import Done from "@material-ui/icons/DoneOutline";
import { Tooltip } from "@material-ui/core";



class CreateNewList extends Component {
  handleCreateClick = (
    handleListCreate,
    newListName,
    notificationSystem
  ) => event => {
    event.preventDefault();
    handleListCreate(newListName);
    notificationSystem.addNotification({
      message: "Notification message",
      level: "success"
    });
  };

  render() {
    const { newListName, handleChange } = this.props;

    return (
      <ArrayContext.Consumer>
        {({ handleListCreate, notificationSystem }) => (
          <>
            <InputSearch
              placeholder="Введите имя нового списка"
              color="primary"
              value={newListName}
              shrink
              onChange={handleChange}
            />
            <Tooltip placement="left" title="Сохранить список">
              <ButtonMainList
                color="primary"
                disableRotate
                onClick={this.handleCreateClick(
                  handleListCreate,
                  newListName,
                  notificationSystem
                )}
              >
                <Done />
              </ButtonMainList>
            </Tooltip>
          </>
        )}
      </ArrayContext.Consumer>
    );
  }
}

export default CreateNewList;
