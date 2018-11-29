import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'
import '../article.css'
import Vote from '../components/Vote'
import Delete from '../components/Delete'
import { Link } from '@reach/router'

class Comments extends Component {
    state = {
        comments:null,
        isLoading: true,
        deleted:false
    }
    render() {
        if(this.state.isLoading) return <div class="loading">Loading...</div>
        return (
            <div>
            <div className="comments">
            {console.log(this.props)}
                {this.state.comments.map(comment => (
                <div className="comment-wrapper" key={comment._id}> 
                <p className="comment-text">{comment.body}</p>
                <p className= "createdby">Posted by: {`${comment.created_by.name} (${comment.created_by.username})`}</p>
                <div className="vote-wrapper"><Vote user={this.props.user} location='comments' data={comment} /></div>
                <div className="delete-button"><Delete user={this.props.user} comment={comment} removeComment={this.removeComment} /></div>
                </div>)
                
                )}
            
            </div>
            <div className ="articlebutton">
            {<Link to = {`/articles/${this.props.article._id}/comments`}><button className="addarticlebtn">Add Comment</button></Link>}
            </div>
            </div>
        );
    }

    removeComment = (id) => {
        api.deleteComment(id)
        .then((data) => this.setState({loading:true, deleted:true}))

        //api delete the comment then set state, loading :true
    }

    componentDidMount () { //do the call here for the comments
        api.getComments(this.props.article._id)
        .then((comments) => {
            this.setState({comments, isLoading: false})
        })
    }

    componentDidUpdate () {
        if(this.state.deleted){
            api.getComments(this.props.article._id)
            .then((comments) => {
                this.setState({comments, isLoading: false, deleted:false})
            })
        }
        
    }

 

}

Comments.propTypes = {

};

export default Comments;