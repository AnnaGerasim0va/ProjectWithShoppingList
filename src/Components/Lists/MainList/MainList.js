import React, { Component } from "react";
import CreateNewList from "./CreateNewList";
import ListSearch from "./ListSearch";
import Add from "@material-ui/icons/Add";
import { ArrayContext } from "../../../ShoppingListContext";
import { PopupMenu } from "../../PopupMenu";
import DeleteWindow from "../../DeleteWindow";
import {
  StyledDiv,
  Header,
  AddButton,
  ListBlock,
  StyledLink
} from "./StyledMainList";
import { isError } from "util";

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArray: {},
      newListName: "",
      isExpandedforAdd: false,
      inputText: "",
      isSort: false
    };
  }

  handleSearch = () => event => {
    // const{name} = listsArray;
    const { inputText } = this.state;
    const value = event.target.value;
    this.setState({
      inputText: value ? value[0].toUpperCase() + value.slice(1) : ""
    });
  };

  handleSortClick = () => {
    const { isSort } = this.state;
    this.setState({ isSort: true });
  };

  handleExpanded = () => {
    const { isExpandedforAdd } = this.state;
    this.setState({ isExpandedforAdd: !isExpandedforAdd });
  };

  handleChange = event => {
    this.setState({ newListName: event.target.value });
  };

  getFilteredLists = listsArray => {
    const { inputText } = this.state;

    return inputText
      ? listsArray.filter(list => {
          const { name } = list;

          return name.toLowerCase().includes(inputText.toLowerCase());
        })
      : listsArray;
  };

  render() {
    const { newListName, isExpandedforAdd, inputText } = this.state;

    return (
      <ArrayContext.Consumer>
        {({
          listsArray
        }) => (
          <StyledDiv>
            <Header>Списки покупок</Header>
            <PopupMenu />
            {/* <button onClick = {this.sortClick}>Сортировать</button> */}

            <ListSearch
              inputText={inputText}
              handleSearch={this.handleSearch}
            />
            {/* {isSort && listsArray.sort((a,b) => (a>b)? 1 : -1) } */}
            {/* {listsArray.filter(list => 
              {
                const {inputText} = this.state;
                return(
                list.name.includes(inputText))})} */}
            {this.getFilteredLists(listsArray).map((list, index) => {
              const { id, name } = list;
              return (
                <ListBlock>
                  <StyledLink key={index} to={`/mainList/${id}`}>
                    {name}
                  </StyledLink>
                  <DeleteWindow />
                </ListBlock>
              );
            })}
            {isExpandedforAdd && (
              <ListBlock>
                <CreateNewList
                  newListName={newListName}
                  handleChange={this.handleChange}
                />
              </ListBlock>
            )}
            <AddButton
              isExpandedforAdd={isExpandedforAdd}
              onClick={this.handleExpanded}
            >
              <Add />
            </AddButton>
          </StyledDiv>
        )}
      </ArrayContext.Consumer>
    );
  }
}

export default MainList;
