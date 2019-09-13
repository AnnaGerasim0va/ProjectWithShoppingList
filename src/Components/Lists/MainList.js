import React, { Component } from "react";
import {Link } from "react-router-dom";
import { ListBlock } from "./ListsStyles";
import CreateNewList from "./CreateNewList";
import {Header} from "./ListsStyles.js";

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
      <div>
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
      </div>
    );
  }
}

export default MainList;
