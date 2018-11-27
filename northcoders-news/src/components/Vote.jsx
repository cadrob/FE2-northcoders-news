import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'

class Vote extends Component {
    state ={
       article: null
    }
  render() {  //show votes,  have vote up and vote down button
        return (
            <div>
                <p>VoteCount : { this.state.article && this.state.article.votes}</p>
                <button onClick={this.handleClick} value='up' >
                    Up
                </button>
                <button onClick={this.handleClick} value='down'>
                    Down
                </button>
            </div>
        );
    }

    handleClick = (event) => {
        const vote = event.target.value
        api.voteArticle(this.state.article._id, vote)
        .then((article) => {this.setState({article})})
    }
    componentDidMount () {
        this.setState({article: this.props.article})
    }


}

Vote.propTypes = {

};

export default Vote;