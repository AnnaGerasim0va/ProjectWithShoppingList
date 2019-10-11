import React, { Component } from "react";

const SortMenu = ({}) => (
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleSort("name")}>по имени</MenuItem>
<MenuItem onClick={handleClose("date")}>по дате</MenuItem>
</Menu>);

export default SortMenu;