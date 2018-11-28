import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'
import '../comments.css'
import Vote from '../components/Vote'
import { Link } from '@reach/router'

class Comments extends Component {
    state = {
        comments:null,
        isLoading: true
    }
    render() {
        if(this.state.isLoading) return <p>Loading...</p>
        return (
            <div className="comments">
                {this.state.comments.map(comment => (
                <div className="comment-wrapper" key={comment._id}>
                <p className="comment-text">{comment.body}</p>
                <div className="vote-wrapper"><Vote location='comments' data={comment} /></div>
                </div>)
                
                )}
            {<Link to = {`/articles/${this.props.article._id}/comments`}><button className="addarticlebtn">Add Comment</button></Link>}
            </div>
        );
    }

    componentDidMount () { //do the call here for the comments
        api.getComments(this.props.article._id)
        .then((comments) => {
            this.setState({comments, isLoading: false})
        })
    }
}

Comments.propTypes = {

};

export default Comments;