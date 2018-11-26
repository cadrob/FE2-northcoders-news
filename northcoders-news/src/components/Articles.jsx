import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as api from '../assets/api';
import { Link, Router } from '@reach/router';
import Article from '../components/Article'

class Articles extends Component { //topics leads to here and then will have search bar within
    state ={ //change api to serve list, back button would set display article back to null
        articles: [],
        displayArticle: null
    }  
    render() {
        return (
            <div>
                {//this.state.displayArticle && <Article /> //back button will need to know slug ///}
                } 
                <ul>
            {this.state.articles.map(article => (<li><Link to={`/articles/${article._id}`}> {article.title}</Link></li>)) 
            }
            </ul>

            {/* <Router>
                <Article path="/articles/:article_id" />
            </Router> */}
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