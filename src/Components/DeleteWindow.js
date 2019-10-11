<<<<<<< HEAD
import styled from "styled-components";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Cancel from "@material-ui/icons/Cancel";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ButtonDeleteDone } from "././Lists/MainList/StyledMainList";
import { ArrayContext } from "../ShoppingListContext";

const DeleteWindow = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ArrayContext.Consumer>
      {({ listsId, deleteElement }) => (
        <div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
          {/* {isDeletion && setOpen(true)} */}
          <ButtonDeleteDone
            onClick={handleClickOpen}
          >
            <Cancel />
          </ButtonDeleteDone>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Удалить дынный список?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Вы действительно хотите удалить данный список?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Нет
              </Button>
              <Button
                onClick={deleteElement(listsId)}
                color="primary"
                autoFocus
              >
                Да
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </ArrayContext.Consumer>
  );
};

export default DeleteWindow;
=======
import styled from "styled-components";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Cancel from "@material-ui/icons/Cancel";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ButtonDeleteDone } from "././Lists/MainList/StyledMainList";
import { ArrayContext } from "../ShoppingListContext";

const DeleteWindow = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ArrayContext.Consumer>
      {({ listsId, deleteElement }) => (
        <div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
          {/* {isDeletion && setOpen(true)} */}
          <ButtonDeleteDone
            onClick={handleClickOpen}
          >
            <Cancel />
          </ButtonDeleteDone>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Удалить дынный список?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Вы действительно хотите удалить данный список?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Нет
              </Button>
              <Button
                onClick={deleteElement(listsId)}
                color="primary"
                autoFocus
              >
                Да
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </ArrayContext.Consumer>
  );
};

export default DeleteWindow;
>>>>>>> 1fac42e5c7d12eb09c17e6ff5101d45a6920d11a
