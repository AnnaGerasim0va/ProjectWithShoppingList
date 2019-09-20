import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { isError } from "util";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNameError: false
    };
  }

  handleNameError = name => {
    const { isNameError } = this.state;
    if (!name) {
      this.setState({ isNameError: false });
    }
  };

  render() {
    const {
      onSaveClick,
      product,
      product: { name, isDone, description },
      id,
      changeDescription,
      changeName
    } = this.props;

    const { isNameError } = this.state;

    return (
      <ChangeBlock>
        <TextField
          error={isNameError}
          label="Название"
          value={name}
          onChange={changeName()}
          helperText={isNameError && "Пожалуйста, введите название"}
        />
        <TextField
          label="Количество"
          value={description ? description.quantity : ""}
          onChange={changeDescription("quantity")}
        />
        <CheckErrorBlock>
          <button onClick={onSaveClick(product, id)}>✔</button>
        </CheckErrorBlock>
      </ChangeBlock>
    );
  }
}

const CheckErrorBlock = styled.div`
  height: 20px;
  width: 20px;
`;

const ChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
