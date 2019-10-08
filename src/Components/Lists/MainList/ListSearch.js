import React, { Component } from "react";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ArrayContext } from "../../../ShoppingListContext";
import TextField from "@material-ui/core/TextField";
import { theme } from "../../Themes";


class ListSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSearch, inputText } = this.props;
    return (
      <ArrayContext.Consumer>
        {({ listsArray }) => (
          <InputForm>
            <InputSearch
              color="primary"
              style={{ margin: 15 }} // ?
              placeholder="Поиск"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              value={inputText}
              onChange={handleSearch(listsArray)}
            />
          </InputForm>
        )}
      </ArrayContext.Consumer>
    );
  }
}

const SearchButton = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  :hover {
    transition: all 0.7s;
    background-color: #d1d1d1;
    opacity: 0.9;
    cursor: pointer;
    svg {
      font-size: 40px;
    }
  }
  svg {
    font-size: 30px;
    color: #707070;
  }
`;

const InputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const InputSearch = styled(TextField)`
  width: 700px;
`;

export default ListSearch;
