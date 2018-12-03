import React, { Component } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Delete extends Component {
     //pass userid and comment down to delete component
    render() {
        const { user , comment, removeComment} = this.props;

        console.log(this.props)
        if(user && user._id === comment.created_by._id) {
            return (
                <div>
                    <FontAwesomeIcon onClick={() => removeComment(this.props.comment._id)} icon={faTrash} color="red"/>
                </div>
            )
        }
             return (
            <div><FontAwesomeIcon onClick ={() => alert('You can only remove your own comments')} icon={faTrash} color="grey"/></div>
            );
        } 
}
export default Delete;