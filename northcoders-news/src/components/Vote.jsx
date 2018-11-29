import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'

class Vote extends Component {  //recieved id ,location, data
    state ={
       data: null,
       isLoading: true,
       prevVote: '',
    }
  render() {  
      console.log(this.state.prevVote)
      if(this.state.isLoading) return <p>...</p>
        return (
            <div>
               <p>VoteCount : {this.state.data.votes}</p>
               {this.props.user && <div>
                {this.state.prevVote === 'up' && <button onClick={this.handleClick} value='down'>unLike</button> }
                {this.state.prevVote === 'down' && <button onClick={this.handleClick} value='up'>Like</button> }
                {!this.state.prevVote && <button onClick={this.handleClick} value='up'>Like</button>}
                {!this.state.prevVote && <button onClick={this.handleClick} value='down'>Dislike</button>}
                </div>}
            </div>
        );
    }

    handleClick = (event) => { 
        let vote = event.target.value
        api.voteChange(this.state.data._id, vote, this.props.location) 
        .then((data) => { //put this in component did update
            this.setState({data, isLoading:false, prevVote:vote === 'down'? 'down' : 'up'})
        })
    }
    componentDidMount () {
        this.setState({data: this.props.data, isLoading: false})
    }


}

Vote.propTypes = {

};

export default Vote;