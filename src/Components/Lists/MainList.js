import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import ShoppingList from "./ShoppingList";
import { ListBlock } from "./ListsStyles.js";

const history = createBrowserHistory();

class MainList extends Component {
  state = {
    listsArray: JSON.parse(localStorage.getItem("listsArray"))
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

  render() {
    const { listsArray } = this.state;

    return (
      <div>
        <div className="header">
          <h2>Списки покупок</h2>
        </div>
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
