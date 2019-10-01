import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { ArrayContext } from "../ShoppingListContext";

export const PopupMenu = () => {
  let [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleToggle = (type, sortOption) => event => {
    // setAnchorEl(event.currentTarget);
    sortOption.type = type;
    console.log("sortOption", sortOption);
    // setAnchorEl(null);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const handle

  return (
    <ArrayContext.Consumer>
      {({ sortOption, sortArrayFunction, listsArray }) => (
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
            <MenuItem onClick={handleToggle("По имени", sortOption)}>
              По имени
            </MenuItem>
            <MenuItem onClick={handleToggle("По дате", sortOption)}>
              По дате
            </MenuItem>
            <MenuItem
              onClick={handleToggle("По количеству продуктов", sortOption)}
            >
              По количеству продуктов
            </MenuItem>
          </Menu>
          <StyledButton variant="contained" onClick={sortArrayFunction(listsArray,sortOption)}>Сортировать</StyledButton>
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
