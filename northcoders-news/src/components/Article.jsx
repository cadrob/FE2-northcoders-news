import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'
import ArticleInfo from '../components/ArticleInfo';
import Comments from '../components/Comments'
import Vote from '../components/Vote'
import '../article.css'




class Article extends Component { //comments in here also? and buttons to vote
    state = {
        article: null
    }
    render() {
        const {article} = this.state;
        return (
           
            <div  >
                {console.log(article)}
                {article &&<ArticleInfo article={article} />}
                <div className ="votes-comments">
                <Comments />
                {article && <Vote article={article}/>}

                </div>
               

                
            </div>
                
        );
    }

    componentDidMount () {  //will have to get comments also here
        api.getArticleByID(this.props.article_id)
        .then((article) => {
            this.setState({article})
        })
    }

}



Article.propTypes = {

};

export default Article;