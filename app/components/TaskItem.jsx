import React, { Component, PropTypes } from 'react';

class TaskItem extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {note, actions} = this.props;

    return (
      <li>
        <span>{note.task}</span>
        <button onClick={this.deleteNote} >X</button>
      </li>
      );
  }

  deleteNote = () => {
    this.props.deleteNote(this.props.note.id);
  };
}


export default TaskItem;
