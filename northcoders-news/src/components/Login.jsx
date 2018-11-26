import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../App.css'

class Login extends Component {

    state = {  // conditional rendering whether user is logged in or not
        user: null
    }
    render() {
        return (
            <div className="login">
                <label>Username</label>
                <input type="text" placeholder="enter username"></input>
                <button>Login</button>
            </div>
        );
    }
}

// Login.propTypes = {

// };

export default Login;