import React, { Component } from "react";
import CreateNewList from "./CreateNewList";
import ListSearch from "./ListSearch";
import Add from "@material-ui/icons/Add";
import ComponentNotFound from "./ComponentNotFound";
import { ArrayContext } from "../../../ShoppingListContext";
import { PopupMenu } from "../../PopupMenu";
import ListItem from "./ListItem";
import { Tooltip } from "@material-ui/core";
import { StyledDiv, Header, AddButton, ListBlock } from "./StyledMainList";

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArray: {},
      newListName: "",
      isExpandedforAdd: false,
      isChangeName: false,
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

  handleChangeListName = () => {
    const { isChangeName } = this.state;
    this.setState({ isChangeName: !isChangeName });
  };

  render() {
    const {
      newListName,
      isExpandedforAdd,
      isChangeName,
      inputText
    } = this.state;
    return (
      <ArrayContext.Consumer>
        {({ listsArray }) => {
          const filterList = this.getFilteredLists(listsArray);

          return (
            <StyledDiv>
              <Header>Списки покупок</Header>
              <PopupMenu />
              {/* <button onClick = {this.sortClick}>Сортировать</button> */}

              <ListSearch
                inputText={inputText}
                handleSearch={this.handleSearch}
              />

              {filterList.length ? (
                filterList.map((list, index) => {
                  return <ListItem key={index} list={list} />;
                })
              ) : (
                <ComponentNotFound />
              )}

              {isExpandedforAdd && (
                <ListBlock>
                  <CreateNewList
                    newListName={newListName}
                    handleChange={this.handleChange}
                  />
                </ListBlock>
              )}
              <Tooltip title="Добавить список">
                <AddButton
                  isExpandedforAdd={isExpandedforAdd}
                  onClick={this.handleExpanded}
                >
                  <Add />
                </AddButton>
              </Tooltip>
            </StyledDiv>
          );
        }}
      </ArrayContext.Consumer>
    );
  }
}

export default MainList;
