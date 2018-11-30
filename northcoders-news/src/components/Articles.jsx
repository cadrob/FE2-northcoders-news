import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as api from '../assets/api';
import { Link, Router } from '@reach/router';
import Article from '../components/Article'
import '../article.css'
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class Articles extends Component { 
    state ={
        articles: [],
        isLoading:true
    }  
    render() {
        if(this.state.isLoading) return (<Loader 
            type="ThreeDots"
            color="red"
            height="100"	
            width="100"
         />)
        const title = this.props.topic_slug[0].toUpperCase()+ this.props.topic_slug.slice(1)
        return (
        <div className="article-main">
            <h1>{title}</h1>
            <div className ="article-list">
                
            {this.state.articles.map(article => ( <div key={article._id} className ="link-wrapper">
                    <div className = "articleinfo">
                    <header>{article.title}</header>
                    <p>Likes: {article.votes}</p>
                    
                    </div>
           
                    <div className="article-link">
                            <Link to={`/articles/${article._id}`}><FontAwesomeIcon icon={faEye} color="red" /></Link>
                    </div>
            </div>
            ))}
            
           
            </div>
            {this.props.user && <Link to = {`/topics/${this.props.topic_slug}/articles/addarticle`}><button className="addarticlebtn">Add Article</button></Link>}
            </div>
        );
    }





    componentDidMount () {
         api.getArticlesByTopic(this.props.topic_slug)
         .then((articles) => this.setState({articles, isLoading:false}))
    }

    componentDidUpdate () { //have article nested within the articles? conditional render
        if(!this.state.articles[0]||(this.state.articles[0].belongs_to !== this.props.topic_slug)){
            api.getArticlesByTopic(this.props.topic_slug)
            .then((articles) => this.setState({articles, isLoading:false}))
        }

    }

}

// Articles.propTypes = {

// };

export default Articles;