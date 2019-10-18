
import styled from "styled-components";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Cancel from "@material-ui/icons/Cancel";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ButtonDeleteDone } from "./Lists/MainList/StyledMainList";
import { ArrayContext } from "../ShoppingListContext";
import { Tooltip } from '@material-ui/core';

const DeleteFunction = ({listId}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickYes = (deleteElement, listId) => () => {
    debugger
    deleteElement(listId);
    handleClose();
  }
  return (
    <ArrayContext.Consumer>
      {({ deleteElement }) => (
        <div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
          {/* {isDeletion && setOpen(true)} */}
          <Tooltip placement="left" title="Удалить список">
          <ButtonDeleteDone
            onClick={handleClickOpen}
          >
            <Cancel />
          </ButtonDeleteDone>
          </Tooltip>
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
                onClick={handleClickYes(deleteElement, listId)}
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

export default DeleteFunction;
