import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const ChangeListName = name => {
  return (
    <>
      <TextField
        error={!name}
        label="Название"
        style={{ margin: 8 }}
        value={name}
        //onChange={this.handleNameChange(id)}
        helperText={!name && "Пожалуйста, введите название"}
      />
    </>
  );
};

export default ChangeListName;
