import React, { Component } from 'react';
import { Link } from '@reach/router'
import * as api from '../assets/api'

class CommentAdder extends Component {
    state ={
        body: '',
        success: false
    }
    render() {
        if(!this.props.user) return (<p>You must be logged in to post a comment</p>)
        if(this.state.success) {return (<div> 
        <h1>Congratulations! You're comment was successfully posted.</h1>
        <Link to = {`/articles/${this.props.article_id}`}><button className="addarticlebtn">Finish</button></Link>
        </div>)}
        return (
            <div>
                <form className="adder">
                    <label htmlFor="body">Comment</label>
                    <textarea onChange={this.handleChange} name="body" rows="4" cols="50"></textarea>
                    <button onClick ={this.handleSubmit}>Post Comment</button>
                </form>
                
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('eventttttt', event.target)
        api.addComment({
            body: this.state.body,
            created_by: this.props.user._id
        }, this.props.article_id)
        .then(this.setState({success:true}))
    }

    handleChange = (event) => { 
        this.setState({[event.target.name]:event.target.value})

    }
}

export default CommentAdder;