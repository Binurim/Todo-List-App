import React, { Component } from "react";
import Item from "./TodoItem";

class TodoList extends Component {

  onTodoCheck = item => {
    this.props.moveToComplete(item.id);
  };

  removeTodo = item => {
    this.props.removeTodo(item);

  };

  render() {
    return (
      <div>
        <h4>Todo List</h4>
        {this.props.items.map((record, id) => {
          return (
            <Item
              todoData={record}
              onTodoCheck={this.onTodoCheck}
              removeTodo={this.removeTodo}
              key={id}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
