import React, { Component, PropTypes } from 'react';

class Task extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {laneId, task, bgStyle} = this.props;
    return (
      <li className={"task "+ bgStyle}>
        <div className="task-content">{task.job}</div>
        <div className="task-tool-bar">
          <span onClick={this.deleteTask} className="glyphicon glyphicon-trash"></span>
        </div>
      </li>
    )
  }

  deleteTask = () =>{
    this.props.deleteTask(this.props.laneId, this.props.task.id);
  };
}

export default Task;
