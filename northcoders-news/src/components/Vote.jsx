import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'

class Vote extends Component {  //recieved id ,location, data
    state ={
       data: null,
       isLoading: true,
       vote: true
    }
  render() {  
      if(this.state.isLoading) return <p>...</p>
        return (
            <div>
               <p>VoteCount : {this.state.data.votes}</p>
               <div>
                {this.state.vote  &&<button onClick={this.handleClick} value='up' >
                    Up
                </button>}
                {!this.state.vote &&<button onClick={this.handleClick} value='down'>
                    Down
                </button>}
            </div>
            </div>
        );
    }

    handleClick = (event) => {
        let vote = '' 
        let voteChange = event.target.value
        if(voteChange === 'up') vote = false
        else if(voteChange === 'down') vote =true;
     
        api.voteChange(this.state.data._id, voteChange, this.props.location) 
        .then((data) => { 
            this.setState({data, isLoading:false, vote:vote})
        })
    }
    componentDidMount () {
        this.setState({data: this.props.data, isLoading: false})
    }


}

Vote.propTypes = {

};

export default Vote;