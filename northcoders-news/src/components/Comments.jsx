import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {
    state = {
        comments: null
    }
    render() {
        return (
            <div >
                <p>-----COMMENTS ARE GOING IN HERE-----</p>
            </div>
        );
    }
}

Comments.propTypes = {

};

export default Comments;