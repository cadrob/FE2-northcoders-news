import React, { Component } from 'react';
import '../App.css';
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {
    render() {
        return (
        <div className="dropdown">
            <button className="dropbtn"><FontAwesomeIcon icon={faBars} /></button>
            <div className="dropdown-content">
            {this.props.topicList.map((topic) => <Link key={topic._id} to={`topics/${topic.slug}/articles`}>{topic.title}</Link> )
            }
            </div>  
        </div>
        );
    }
}

export default Nav;

