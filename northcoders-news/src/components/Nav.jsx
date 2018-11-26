import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../App.css';
import { Link } from '@reach/router'

class Nav extends Component {
    state = { //do we need state? Can we add topics? or just add articles to a certain topic

    }
    render() {
        return (
            <div className="dropdown">
            <button className="dropbtn">Topics</button>
            <div className="dropdown-content">
            {this.props.topicList.map((topic) => <Link key={topic._id} to={`topics/${topic.slug}/articles`}>{topic.title}</Link> )
            }  
            </div>
        </div>
        );
    }
}

// Nav.propTypes = { 

// };

export default Nav;

