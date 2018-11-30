import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../assets/api'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'

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
               <p>Likes: {this.state.data.votes}</p>
               <div>
                {this.state.vote && 
                <FontAwesomeIcon onClick={() => this.handleClick('up')} value ='up' icon={faThumbsUp} color="red" />}
                {!this.state.vote && 
                <FontAwesomeIcon onClick={() => this.handleClick('down')} value ='down' icon={faThumbsDown} color="red" />
                }
            </div>
            </div>
        );
    }

    handleClick = (voteChange) => {

        let vote = '' 
    
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