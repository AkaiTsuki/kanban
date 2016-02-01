import React, { Component, PropTypes } from 'react';

class TaskItem extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {note} = this.props;

    return <li>{note.task}</li>;
  }
}


export default TaskItem;
