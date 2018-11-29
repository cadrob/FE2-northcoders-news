import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css'

class Delete extends Component {
     //pass userid and comment down to delete component
    render() {
        const { user , comment, removeComment} = this.props;

        console.log(this.props)
        if(user && user._id === comment.created_by._id) {
            return (
                <div>
                    <button onClick={() => removeComment(this.props.comment._id)} className="deletebtn">Remove</button>
                </div>
            )
        }
        
        return (
            <div>
                <button onClick ={() => alert('You can only remove your own comments')} className="deletebtnDisabled">Remove</button>
            </div>
        );
    }

    
}

Delete.propTypes = {

};

export default Delete;