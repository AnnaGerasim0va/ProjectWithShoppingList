<<<<<<< HEAD
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

=======
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

>>>>>>> 1fac42e5c7d12eb09c17e6ff5101d45a6920d11a
export default SortMenu;