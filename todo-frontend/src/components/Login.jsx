import React, { Component } from 'react'
import AuthenticationService from "../Service/AuthenticationService";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'binuri',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked(){


        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)

            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.setState({showSuccessMessage:true})
                this.setState({hasLoginFailed:false})

                console.log("oooooooooooooooooooooooooooooooooooooooooo")
                this.props.onLogCheckStatus(true);

            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
                this.props.onLogCheckStatus(false);

            })
}
   
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    User Name: <input type="text" name="username" 
                    value={this.state.username}
                     onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;