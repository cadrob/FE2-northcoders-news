import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as api from '../assets/api';
import { Link, Router } from '@reach/router';
import Article from '../components/Article'

class Articles extends Component { 
    state ={
        articles: []
    }  
    render() {
        return (
            <div>
                <h1>{//what areticles page aree you on 
                }</h1>
                <ul>
            {this.state.articles.map(article => (<li><Link to={`/articles/${article._id}`}> {article.title}</Link></li>)) 
            }
            </ul>
            {console.log(this.props)}

            
            <Link to = {`/topics/${this.props.topic_slug}/articles/addarticle`}><button className="addarticlebtn">Add Article</button></Link>
            </div>
        );
    }





    componentDidMount () {
         api.getArticlesByTopic(this.props.topic_slug)
         .then((articles) => this.setState({articles}))
    }

    componentDidUpdate () { //have article nested within the articles? conditional render
        if(!this.state.articles[0]||(this.state.articles[0].belongs_to !== this.props.topic_slug)){
            api.getArticlesByTopic(this.props.topic_slug)
            .then((articles) => this.setState({articles, displayArticle:null}))
        }

    }
}

// Articles.propTypes = {

// };

export default Articles;