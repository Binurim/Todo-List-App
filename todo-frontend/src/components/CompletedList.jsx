import React, { Component } from "react";
import Item from "./TodoItem";

class CompletedList extends Component {
  onTodoCheck = item => {
    this.props.moveBackToinComplete(item.id);
  };

  render() {
    return (
        <div>
        <h4>Completed List</h4>
        {this.props.items.map((record, id) => {
          return (
            <Item todoData={record} onTodoCheck={this.onTodoCheck} key={id} />
          );
        })}
      </div>
    );
  }
}

export default CompletedList;
