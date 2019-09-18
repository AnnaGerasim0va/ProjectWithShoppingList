import React, { Component } from "react";
import CreateNewList from "./CreateNewList";
import ListSearch from "./ListSearch";
import Add from "@material-ui/icons/Add";
import Cancel from "@material-ui/icons/Cancel";
import {
  StyledDiv,
  Header,
  ButtonDeleteDone,
  AddButton,
  ListBlock, 
  StyledLink
} from "./StyledMainList";

class MainList extends Component {
  state = {
    listsArray: JSON.parse(localStorage.getItem("listsArray")),
    newListName: "",
    isExpanded: false
  };

  deleteElement = id => () => {
    const { listsArray } = this.state;

    // listsArray.filter(item => {console.log(id!==item.id);
    //      return id!==item.id});
    let isDeletion = window.confirm("Вы действительно хотите удалить список?");
    if (isDeletion) {
      this.setState({
        listsArray: listsArray.filter(item => {
          return item.id !== id;
        })
      });
    }
  };

  handleExpanded = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };

  handleChange = event => {
    console.log("event", event.target.value);
    this.setState({ newListName: event.target.value });
  };

  handleListCreate = () => {
    const { newListName } = this.state;
    if (newListName) {
      const listsArray = JSON.parse(localStorage.getItem("listsArray"));
      listsArray.push({
        name: newListName,
        date: {},
        productsList: [],
        id: listsArray.length
      });
      localStorage.setItem("listsArray", JSON.stringify(listsArray));
      console.log(listsArray);
      this.setState({ listsArray, newListName: "" });
    }
  };

  render() {
    const { listsArray, newListName, isExpanded } = this.state;

    return (
      <StyledDiv>
        <Header>Списки покупок</Header>
        <ListSearch />
        {listsArray.map((list, index) => {
          const { id, name } = list;
          return (
            <ListBlock>
              <StyledLink key={index} to={`/mainList/${id}`}>
                {name}
              </StyledLink>
              <ButtonDeleteDone onClick={this.deleteElement(id)}><Cancel /></ButtonDeleteDone>
            </ListBlock>
          );
        })}
        <AddButton onClick={this.handleExpanded}>
          <Add />
        </AddButton>
        {isExpanded && (
          <ListBlock>
            <CreateNewList
              newListName={newListName}
              handleListCreate={this.handleListCreate}
              handleChange={this.handleChange}
            />
          </ListBlock>
        )}
      </StyledDiv>
    );
  }
}


export default MainList;
