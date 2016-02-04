import React, { Component, PropTypes } from 'react';
import Task from './Task.jsx';

class Lane extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {laneId, title, titleBgColor, tasks, actions } = this.props;
    return (
      <div className="col-md-3 fill">
        <div className="lane">
          <h3 className={'lane-title ' + titleBgColor}>
            {title}
            <span onClick={this.addNewTask} className="glyphicon glyphicon-plus pull-right"></span>
          </h3>
          <ul className="lane-task-list">
            {tasks.map(task => <Task laneId={laneId} key={task.id} task={task} bgStyle={titleBgColor} {...actions} />)}
          </ul>
        </div>
      </div>
    )
  }

  addNewTask = () => {
    console.log("Lane: add new task to "+ this.props.laneId);
    this.props.actions.createTask(this.props.laneId);
  };
}

export default Lane;
