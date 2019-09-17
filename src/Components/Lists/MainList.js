import React, { Component } from "react";
import {Link } from "react-router-dom";
import CreateNewList from "./CreateNewList";
import styled from "styled-components";

class MainList extends Component {
  state = {
    listsArray: JSON.parse(localStorage.getItem("listsArray")),
    newListName: ""
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
    const { listsArray, newListName } = this.state;

    return (
      <StyledDiv>
        <div className="header">
          <Header>Списки покупок</Header>
        </div>
        <CreateNewList newListName={newListName} handleListCreate={this.handleListCreate} handleChange={this.handleChange}  />
        {listsArray.map((list, index) => {
          const { id, name } = list;
          return (
            <ListBlock>
              <Link key={index} to={`/mainList/${id}`}>
                {name}
              </Link>
              <button onClick={this.deleteElement(id)}>Удалить</button>
            </ListBlock>
          );
        })}
      </StyledDiv>
    );
  }
}

export const StyledDiv = styled.div`
margin-top:12%;
`;

export const Header = styled.h2`
  text-align: center;
`;

export const ListBlock = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: #d4fcf1;
  display: flex;
  justify-content: space-between;
  border: 1px solid aquamarine;
  border-radius: 7px;
  box-shadow: 10px 10px 5px rgb(49, 100, 100);
`;

export default MainList;
