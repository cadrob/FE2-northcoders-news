import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'

class Comments extends Component {
    state = {
        comments:null,
        isLoading: true
    }
    render() {
        if(this.state.isLoading) return <p>Loading...</p>
        return (
            <div >
                {this.state.comments.map(comment => (<div key={comment._id}><p>{comment.body}</p></div>))}
            </div>
        );
    }

    componentDidMount () { //do the call here for the comments
        api.getComments(this.props.article._id)
        .then((comments) => {
            console.log(comments)
            this.setState({comments, isLoading: false})
        })
    }
}

Comments.propTypes = {

};

export default Comments;