import {ADD_TASK, DELETE_TASK } from '../constants/KanbanActionType';
import uuid from 'node-uuid';

function addTaskToTargetLane(state, target, job){
  var newTask = {id: uuid.v4(), job};

  var newState = Object.assign({}, state);

  newState[target].tasks = [newTask, ...newState[target].tasks];
  return newState;
}

function deleteTaskFromTargetLane(state, target, id){
  var newState = Object.assign({}, state);

  newState[target].tasks = newState[target].tasks.filter(task => task.id !== id);

  return newState;
}

export default function notes(state=initState, action) {
  switch (action.type) {
    case ADD_TASK:
      return addTaskToTargetLane(state, action.target, action.task);
    case DELETE_TASK:
      return deleteTaskFromTargetLane(state, action.target, action.id);
    default:
      return state;
  }
}
