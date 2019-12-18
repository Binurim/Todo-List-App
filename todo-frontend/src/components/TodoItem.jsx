import React, { Component } from "react";

class TodoItem extends Component {
  static defaultProps = {
    todoData:
        {title: "Todo",
          completed: false,
          id: "01"
        }
  };
  render() {
    const { todoData, onTodoCheck, removeTodo } = this.props;
    return (
      <div>
        <div className="col-sm-6 card" key={todoData.id}>
          <label>
            <input
              type="checkbox"
              defaultChecked={todoData.completed}
              onChange={() => onTodoCheck(todoData)}
            />
            <span className={todoData.completed ? "abc" : ""}>
              {todoData.title}
            </span>
            {!todoData.completed && (
              <button
                className="close float-right pull-right"
                onClick={() => removeTodo(todoData)}
              >
                <span className="float-right pull-right" aria-hidden="true">
                  &times;
                </span>{" "}
              </button>
            )}
          </label>
          <br />
        </div>
      </div>
    );
  }
}

export default TodoItem;
