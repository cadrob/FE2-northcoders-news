import React, { Component } from 'react';
import * as api from '../assets/api'

class Login extends Component {
    state = {
        username: "jessjelly",
        loggedIn: false,
        err: null
    }
    render() {
    if(this.state.loggedIn) { return (
        <div className="login"><p>Logged in as: {this.state.username}</p>
            <button onClick={this.handleLogout}>Logout</button>
        </div>
    )}          
    if(this.state.err) {
        alert('User not found')
        this.setState({err:null})
    } 
    return (
             <div className="login">
                <input onChange ={this.handleChange} name ="username" value = {this.state.username} type="text" placeholder="Enter Username"></input>
                <input type="password" placeholder="Enter Password" name = "password"></input>
                <button onClick = {this.handleLogin}>Login</button>
            </div>
        ); 
    }
    handleChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleLogin = (event) => {
        api.getUser(this.state.username)
        .then((user) => { 
            this.props.setUser(user)
            this.setState({loggedIn: true, err:null})
        })
        .catch(err => this.setState({err}))
    }
    handleLogout = (event) => {
        localStorage.removeItem("user");
        this.props.setUser(null)
        this.setState({loggedIn :false})
    }
}

export default Login;