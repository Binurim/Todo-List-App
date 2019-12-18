import React, {Component} from "react";
import TodoList from "../components/TodoList";
import CompletedList from "../components/CompletedList";
import AddTodo from "../components/AddTodo";
import Login from "../components/Login";

import {getToDoList, deleteTodo} from "../Actions/apiCalls";

class ToDoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inCompleteItems: [],
            completedList: [],
            userLoginSuccess:false
        };
    }

    componentDidMount() {
        getToDoList().then(res => {
          let response = res;

            let {inCompleteItems, completedList} = this.state;
            response.map((item, i) => {
                if (item.completed === true) {
                    completedList.push(item);
                    inCompleteItems.splice(i, 1);

                } else inCompleteItems.push(item);
                return inCompleteItems;
            });

            // update state
            this.setState({
                completedList,
                inCompleteItems
            });
        });
    }

    moveToComplete = id => {
        let {inCompleteItems, completedList} = this.state;
        inCompleteItems.map((item, i) => {
            if (item.id === id) {
                item.completed = true;
                inCompleteItems.splice(i, 1);
                completedList.push(item);
            }
            return inCompleteItems;
        });

        // update state
        this.setState({
            completedList,
            inCompleteItems
        });
    };

    moveBackToinComplete = id => {
        let {inCompleteItems, completedList} = this.state;
        completedList.map((item, i) => {
            if (item.id === id) {
                item.completed = false;
                inCompleteItems.push(item);
                completedList.splice(i, 1);
            }
            return completedList;
        });
        // update state
        this.setState({
            completedList,
            inCompleteItems
        });
    };

    removeTodo = item => {
        //console.log(item.id);                

        const {inCompleteItems} = this.state;
        this.setState({
            inCompleteItems: inCompleteItems.filter(i => {
                return i !== item;
            })
        });

        deleteTodo(item.id);
    };


    handleSubmit = todo => {
        this.setState({inCompleteItems: [...this.state.inCompleteItems, todo]});
    };

    onLogCheckStatus = (status =false) => {
        console.log("onloooogggggggggggggggggggg")
        let userLoginSuccess = status;
        this.setState({userLoginSuccess});

    }
    
    // ToDo
    render() {
    let {userLoginSuccess}= this.state

        
        return (
            <div>
                <Login 
                  onLogCheckStatus= {this.onLogCheckStatus}
                />

                {userLoginSuccess?

                 <div> 
               
                <TodoList
                    items={this.state.inCompleteItems}
                    moveToComplete={this.moveToComplete}
                    removeTodo={this.removeTodo}
                />
                <br/>
                <AddTodo
                    handleSubmit={this.handleSubmit}
                />
                <CompletedList
                    items={this.state.completedList}
                    moveBackToinComplete={this.moveBackToinComplete}
                />
                <br/>
                
                 </div>: ''} 
              
            </div>
        
        );
    }
}

export default ToDoListContainer;
