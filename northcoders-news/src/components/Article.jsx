import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'
import ArticleInfo from '../components/ArticleInfo';
import Comments from '../components/Comments'
import Vote from '../components/Vote'
import '../article.css'
import Loader from 'react-loader-spinner';




class Article extends Component { //comments in here also? and buttons to vote
    state = {
        article: null,
        isLoading: true
    }
    render() {
        const {article} = this.state;
        if(this.state.isLoading) {return<Loader 
            type="ThreeDots"
            color="red"
            height="100"	
            width="100"
         />   }
        return (
         
            <div className ="article-comments">
                {article &&<ArticleInfo article={article} />}
                <div className ="votes-comments">
                <Comments user={this.props.user} article={article} />


                </div>
               

                
            </div>
                
        );
    }

    componentDidMount () {  //will have to get comments also here
        api.getArticleByID(this.props.article_id)
        .then((article) => {
            this.setState({article, isLoading:false})
        })
    }

}



Article.propTypes = {

};

export default Article;