import React, { Component } from "react";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ArrayContext } from "../../../ShoppingListContext";

class ListSearch extends Component {
  constructor(props){
    super(props);
    this.state={
      inputText:""
    }
  }


  render() {
    const {inputText, handleSearch} = this;
    return (
      <ArrayContext.Consumer>
        {({ listsArray }) => (
          <InputForm>
            <InputSearch
              placeholder="Поиск"
              value = {inputText}
              onChange={handleSearch(listsArray, inputText)}
            />
            <SearchButton>
              <Search />
            </SearchButton>
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

const InputSearch = styled.input`
  padding: 3px 5px 3px 150px;
  margin: 5px;
  background-color: #e6fff2;
`;

export default ListSearch;
