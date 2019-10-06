import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { theme } from "./Themes";
import { ThemeProvider } from "@material-ui/styles";
import { ArrayContext } from "../ShoppingListContext";
import { SORT_OPTIONS } from "./Constants";

export const PopupMenu = () => {
  let [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleToggle = (type, changeSortOption) => () => {
    changeSortOption(type);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ArrayContext.Consumer>
      {({ sortOption, sortArrayFunction, listsArray, changeSortOption }) => (
        <div>
          <StyledButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {sortOption.type ? `${sortOption.type}` : `Не выбрано`}
          </StyledButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleToggle(SORT_OPTIONS.name, changeSortOption)}
            >
              {SORT_OPTIONS.name}
            </MenuItem>
            <MenuItem
              onClick={handleToggle(SORT_OPTIONS.date, changeSortOption)}
            >
              {SORT_OPTIONS.date}
            </MenuItem>
            <MenuItem onClick={handleToggle(SORT_OPTIONS.count, sortOption)}>
              {SORT_OPTIONS.count}
            </MenuItem>
          </Menu>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              onClick={sortArrayFunction(listsArray, sortOption)}
            >
              Сортировать
            </Button>
          </ThemeProvider>
        </div>
      )}
    </ArrayContext.Consumer>
  );
};

const StyledButton = styled(Button)`
  background-color: #6ce0c2;
  :hover {
    color: #bef7e8;
  }
`;
