import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'
import { Link } from '@reach/router'
import '../App.css';

 


class ArticleAdder extends Component {
    state = {
        title: '',
        body:'',
        success: false,
        err: null
    }
    render() {
        if(!this.props.user) return (<p>You must be logged in to post an article</p>)
        if(this.state.success) {return (<div> 
        <h1>Congratulations! You're article was successfully posted.</h1>
        <Link to = {`/topics/${this.props.topic_slug}/articles/`}><button className="addarticlebtn">Finish</button></Link>
        </div>)}
        return (
            <div>
               
                <form className ="adder">
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} type="text" name="title"></input>
                    <label htmlFor="body">Content</label>
                    <textarea onChange={this.handleChange} name="body" rows="10" cols="50"></textarea>
                    <button onClick ={this.handleSubmit}>Post Article</button>
                </form>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        api.addArticle({
            title: this.state.title,
            body: this.state.body,
            created_by: this.props.user._id
            
        }, this.props.topic_slug).then(this.setState({success:true}))

        //api post request here

    }

    handleChange = (event) => { //validation here
        this.setState({[event.target.name]:event.target.value})

    }
} 

ArticleAdder.propTypes = {

};

export default ArticleAdder;