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

  handleNameChange = (id) => event => {
    this.props.changeName(id,event);

    if (!this.state.nameTouched) {
      this.setState({
        nameTouched: true
      });
    }
  };

<<<<<<< HEAD
  
=======
  onAddClick = (name, product, id) => () => {
    const { onSaveClick } = this.props;
    if (!name) {
      this.setState({ nameTouched: true });
    } else {
      onSaveClick(product, id);
    }
  };
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5

  render() {
    const {
      creation,
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
          style={{ margin: 8 }}
          value={name}
          onChange={this.handleNameChange(id)}
          helperText={nameTouched && !name && "Пожалуйста, введите название"}
        />
        <TextField
          label="Количество"
          style={{ margin: 8 }}
          value={description ? description.quantity : ""}
          onChange={changeDescription("quantity")}
        />
<<<<<<< HEAD
        
=======
        <CheckErrorBlock>
          <button onClick={this.onAddClick(name, product, id)}>✔</button>
        </CheckErrorBlock>
>>>>>>> 6081ad68cdea69d929ed843ced49f84ac1698aa5
      </ChangeBlock>
    );
  }
}

export default Description;



const ChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
