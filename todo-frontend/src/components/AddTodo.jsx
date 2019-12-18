import React, {Component} from "react";
import {postTodo} from "../Actions/apiCalls";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "" };
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    submitForm = event => {
        this.props.handleSubmit(this.state);
        this.setState(this.state);
        event.preventDefault();
        this.formRef.reset(); //reset the input field

        const item = {title: this.state.title};
        postTodo({item});

    };

    render() {
        const {todo} = this.state;

        return (
            <div>
                <form ref={ref => (this.formRef = ref)} onSubmit={this.submitForm}>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            name="title"
                            value={todo}
                            placeholder="Add new ..."
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;
