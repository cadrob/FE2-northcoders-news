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
        
    if(this.state.loggedIn) { return <p>Logged in as {this.state.username}</p>}          
    return (
        
             <div className="login">
                <label>Username</label>
                <input onChange ={this.handleChange} type="text" placeholder="enter username"></input>
                {this.state.err && <p>User not found</p>}
                <button onClick = {this.handleClick}>Login</button>
            </div>
            
        
        );
                
      
    }
    handleChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleClick = (event) => {
        
        api.getUser(this.state.username)
        .then((user) => {
            this.props.setUser(user)
            this.setState({loggedIn: true, err:null})
        })
        .catch(err => this.setState({err}))

    }
    


}

Login.propTypes = {

};

export default Login;