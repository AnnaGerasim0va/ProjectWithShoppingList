import React, { Component } from "react";
import { ListBlock, StyledLink } from "./StyledMainList";
import Deletion from "../../Deletion";
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
              <Deletion listId={id} handleClickCreate={this.handleClick} />
            </ListBlock>
          );
        }}
      </ArrayContext.Consumer>
    );
  }
}

export default ListItem;
