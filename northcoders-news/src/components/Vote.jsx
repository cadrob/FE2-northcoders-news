import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Vote extends Component {
    render() {  //show votes,  have vote up and vote down button
        return (
            <div>
                <p>VoteCount : 4</p>
                <button>
                Up
                </button>
                <button>
                    Down
                </button>
            </div>
        );
    }

    componentDidUpdate () { // when 

    }
}

Vote.propTypes = {

};

export default Vote;