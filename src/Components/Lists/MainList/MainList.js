import React, { Component } from "react";
import CreateNewList from "./CreateNewList";
import ListSearch from "./ListSearch";
import Add from "@material-ui/icons/Add";
import Cancel from "@material-ui/icons/Cancel";
import { ArrayContext } from "../../../ShoppingListContext";
import {
  StyledDiv,
  Header,
  ButtonDeleteDone,
  AddButton,
  ListBlock,
  StyledLink
} from "./StyledMainList";

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newListName: "",
      isExpanded: false
    };
  }

  deleteElement = (id) => () => {
    const {listsArray} = this.state;
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

  // handleListCreate = () => {
  //   const { listsArray, newListName } = this.state;
  //   if (newListName) {
  //     // const listsArray = JSON.parse(localStorage.getItem("listsArray"));
  //     listsArray.push({
  //       name: newListName,
  //       date: {},
  //       productsList: [],
  //       id: listsArray.length
  //     });
  //       // localStorage.setItem("listsArray", JSON.stringify(listsArray));
  //       // console.log(listsArray);
  //     this.setState({ listsArray, newListName: "" });
  //   }
  // };

  render() {
    const { newListName, isExpanded } = this.state;

    return (
      <ArrayContext.Consumer>
        {({listsArray}) => (
          <StyledDiv>
            <Header>Списки покупок</Header>
            <ListSearch />
            {
              listsArray.map((list, index) => {
              const { id, name } = list;
              return (
                <ListBlock>
                  <StyledLink key={index} to={`/mainList/${id}`}>
                    {name}
                  </StyledLink>
                  <ButtonDeleteDone onClick={this.deleteElement(id)}>
                    <Cancel />
                  </ButtonDeleteDone>
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
                  handleChange={this.handleChange}
                />
              </ListBlock>
            )}
          </StyledDiv>
        )}
      </ArrayContext.Consumer>
    );
  }
}

export default MainList;
