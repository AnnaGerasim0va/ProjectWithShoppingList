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
      filterArray: {},
      newListName: "",
      isExpanded: false,
      isSort: false
    };
  }

  handleSearch = (listsArray, inputText) => event => {
    const{name} = listsArray;
    const {inputText, filterArray} = this.state;
    this.setState({inputText:event.target.value});
    console.log('value', event.target.value, "listsArray", listsArray);
    filterArray = listsArray.filter(name => name.include(event.target.value));
    this.setState(filterArray);
  };

  handleSortClick = () => {
    const { isSort } = this.state;
    this.setState({ isSort: true });
  }

  handleExpanded = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };

  handleChange = event => {
    console.log("event", event.target.value);
    this.setState({ newListName: event.target.value });
  };

  findCurrentList = (listsArray, id) => { 
    const currentList = listsArray.find(list => list.id === Number(id));
    this.setState({ currentList });
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
    const { newListName, isExpanded, isSort } = this.state;

    return (
      <ArrayContext.Consumer>
        {({listsArray, deleteElement, currentList}) => (
          <StyledDiv>
            <Header>Списки покупок</Header>
            <button onClick = {this.sortClick}>Сортировать</button>
            <ListSearch handleSearch={this.handleSearch}/>
            {isSort && listsArray.sort((a,b) => (a>b)? 1 : -1) }
            {
              
              listsArray.map((list, index) => {              
              const { id, name } = list;
              return (
                
                <ListBlock>
                  <StyledLink key={index} to={`/mainList/${id}`}>
                    {name}
                  </StyledLink>
                  {this.findCurrentList(listsArray, id)}
                  <ButtonDeleteDone onClick={deleteElement(id)}>
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
