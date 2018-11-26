import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleSearch extends Component {
    state = {
        searchTerm: ''
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="search for article"></input> 
            </div>
        );
    }
}

ArticleSearch.propTypes = {

};

export default ArticleSearch;