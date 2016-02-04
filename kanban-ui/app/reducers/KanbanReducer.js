import {ADD_TASK, DELETE_TASK, UPDATE_TASK, REQUEST_DATA, RECEIVE_DATA } from '../constants/KanbanActionType';
import uuid from 'node-uuid';
import { combineReducers } from 'redux'


function addTaskToTargetLane(state, target, job){
  var newTask = {id: uuid.v4(), job};

  var board = Object.assign({}, state);
  board[target].tasks = [newTask, ...board[target].tasks];

  return board;
}

function deleteTaskFromTargetLane(state, target, id){
  var board = Object.assign({}, state);
  board[target].tasks = board[target].tasks.filter(task => task.id !== id);

  return board;
}

function updateTask(state, target, id, job){
  var board = Object.assign({}, state);
  board[target].tasks = board[target].tasks.map(task => {
    if(task.id === id) {
      return {
        id: task.id,
        job
      }
    } else {
      return task;
    }
  });
  return board;
}

function boadReducer(state = {}, action){
  switch (action.type) {
    case ADD_TASK:
      return addTaskToTargetLane(state, action.target, action.task);
    case DELETE_TASK:
      return deleteTaskFromTargetLane(state, action.target, action.id);
    case UPDATE_TASK:
      return updateTask(state, action.target, action.id, action.job);
    case RECEIVE_DATA:
      return action.json;
    default:
      return state;
  }
}

function loadingReducer(state = true, action){
  switch (action.type) {
    case REQUEST_DATA:
      return true;
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  board: boadReducer
});

export default rootReducer;
