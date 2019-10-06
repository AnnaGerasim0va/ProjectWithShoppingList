import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { isError } from "util";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTouched: false
    };
  }

  handleNameChange = event => {
    this.props.changeName(event);

    if (!this.state.nameTouched) {
      this.setState({
        nameTouched: true
      });
    }
  };

  onAddClick = (name, product, id) => () => {
    const { onSaveClick } = this.props;
    if (!name) {
      this.setState({ nameTouched: true });
    } else {
      onSaveClick(product, id);
    }
  };

  render() {
    const {
      creation,
      onSaveClick,
      product,
      product: { name, isDone, description },
      id,
      changeDescription,
      changeName
    } = this.props;

    const { localName, nameTouched } = this.state;

    //const name = creation ? localName : productName;

    return (
      <ChangeBlock>
        <TextField
          error={nameTouched && !name}
          label="Название"
          value={name}
          onChange={this.handleNameChange}
          helperText={nameTouched && !name && "Пожалуйста, введите название"}
        />
        <TextField
          label="Количество"
          value={description ? description.quantity : ""}
          onChange={changeDescription("quantity")}
        />
        <CheckErrorBlock>
          <button onClick={this.onAddClick(name, product, id)}>✔</button>
        </CheckErrorBlock>
      </ChangeBlock>
    );
  }
}

export default Description;

const CheckErrorBlock = styled.div`
  height: 20px;
  width: 20px;
`;

const ChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
