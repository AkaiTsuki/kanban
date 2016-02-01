import React, { Component, PropTypes } from 'react';

class Task extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      isEditing: false
    };
  }

  render() {
    const {laneId, task, bgStyle} = this.props;
    return (
      <li className={"task "+ bgStyle}>
        {this.state.isEditing ?
          (<div className="form-group"><textarea className="form-control" rows="5" onBlur={this.updateTask} autoFocus={true} defaultValue={task.job} ></textarea></div>) :
            <div onClick={this.edit} className="task-content">{task.job}</div> }
        <div className="task-tool-bar">
          <span onClick={this.deleteTask} className="glyphicon glyphicon-trash"></span>
        </div>
      </li>
    )
  }

  edit = () => {
    this.setState({
      isEditing: true
    });
  };

  deleteTask = () =>{
    this.props.deleteTask(this.props.laneId, this.props.task.id);
  };

  updateTask = (event) =>{
    var value = event.target.value;
    if(this.props.updateTask && value.trim()){
      this.props.updateTask(this.props.laneId, this.props.task.id, value);
    }
    this.setState({
      isEditing: false
    });
  };
}

export default Task;
