import React from 'react';
import PropTypes from 'prop-types';
import '../article.css'

const ArticleInfo = props => {
    const {article} = props;
    return (

        
        <div className='article'>
            <header>{article.title}</header>
            <div className='articlebody'>
            
            <p>{article.body}</p>
            </div>
            <div className='articleDetails'>
                <p>Written by: {article.created_by.name}</p>
                <p>Created on: {article.created_at.split('T')[0]}</p>
            </div>

            
        </div>
    );
};

ArticleInfo.propTypes = {
    
};

export default ArticleInfo;