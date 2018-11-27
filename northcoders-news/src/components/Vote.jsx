import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'

class Vote extends Component {  //recieved id ,location, data
    state ={
       data: null,
       isLoading: true
    }
  render() {  
      if(this.state.isLoading) return <p>...</p>
        return (
            <div>
               <p>VoteCount : {this.state.data.votes}</p>
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
        console.log(this.state.data)
        const vote = event.target.value
        console.log(this.props.location, vote, this.state.data._id)
        api.voteChange(this.state.data._id, vote, this.props.location)
        .then((data) => { 
            console.log(data)
            this.setState({data, isLoading:false})
        })
    }
    componentDidMount () {
        this.setState({data: this.props.data, isLoading: false})
    }


}

Vote.propTypes = {

};

export default Vote;