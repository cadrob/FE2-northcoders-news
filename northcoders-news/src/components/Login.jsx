import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'

class Login extends Component {
    state = {
        username: "",
        loggedIn: false,
        err: null
    }
    render() {
        const { setUser } = this.props;
        
    if(this.state.loggedIn) { return (
        <div className="login"><p>Logged in as {this.state.username}</p>
        <button onClick={this.handleLogout}>Logout</button>
        </div>
    )}          
    return (
        
             <div className="login">
                <label>Username</label>
                <input onChange ={this.handleChange} type="text" placeholder="enter username"></input>
                {this.state.err && <p>User not found</p>}
                <label>Password</label>
                <input type="password"></input>
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
        this.props.setUser(null)
        this.setState({loggedIn :false})
    }
    


}

Login.propTypes = {

};

export default Login;