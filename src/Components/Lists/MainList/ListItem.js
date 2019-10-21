import React, { Component } from "react";
import { Tooltip } from "@material-ui/core";
import { ListBlock, StyledLink, ButtonMainList } from "./StyledMainList";
import DeleteFunction from "../../DeleteFunction";
import Create from "@material-ui/icons/Create";
import { ArrayContext } from "../../../ShoppingListContext";
import TextField from "@material-ui/core/TextField";

class ListItem extends Component {
  state = { isChange: false };

  handleClick = () => {
    const { isChange } = this.state;
    this.setState({ isChange: !isChange });
  };

  render() {
    const {
      list: { id }
    } = this.props;
    const { isChange } = this.state;
    return (
      <ArrayContext.Consumer>
        {({ listsArray, handleChangeListName }) => {
          console.log(listsArray, "listsArray");
          const currentList = listsArray.find(item => item.id === id);
          const { name } = currentList;
          return (
            <ListBlock>
              <StyledLink to={`/mainList/${id}`}>
                {isChange ? (
                  <TextField
                    error={!name}
                    label="Название"
                    value={name}
                    onChange={handleChangeListName(id)}
                    onClick={event => {
                      event.preventDefault();
                    }}
                    helperText={!name && "Пожалуйста, введите название"}
                  />
                ) : (
                  name
                )}
              </StyledLink>
              <Tooltip placement="left" title="Изменить имя списка">
                <ButtonMainList onClick={this.handleClick}>
                  <Create />
                </ButtonMainList>
              </Tooltip>
              <DeleteFunction listId={id} />
            </ListBlock>
          );
        }}
      </ArrayContext.Consumer>
    );
  }
}

export default ListItem;
