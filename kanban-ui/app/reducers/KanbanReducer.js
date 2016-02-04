import {ADD_TASK, DELETE_TASK, UPDATE_TASK, REQUEST_DATA, RECEIVE_DATA } from '../constants/KanbanActionType';
import uuid from 'node-uuid';

function addTaskToTargetLane(state, target, job){
  var newTask = {id: uuid.v4(), job};

  var board = Object.assign({}, state.board);
  board[target].tasks = [newTask, ...board[target].tasks];

  return {
    isLoading: state.isLoading,
    board
  };
}

function deleteTaskFromTargetLane(state, target, id){
  var board = Object.assign({}, state.board);
  board[target].tasks = board[target].tasks.filter(task => task.id !== id);

  return {
    isLoading: state.isLoading,
    board
  };
}

function updateTask(state, target, id, job){
  var board = Object.assign({}, state.board);
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
  return {
    isLoading: state.isLoading,
    board
  };
}

export default function notes(state=initState, action) {
  switch (action.type) {
    case ADD_TASK:
      return addTaskToTargetLane(state, action.target, action.task);
    case DELETE_TASK:
      return deleteTaskFromTargetLane(state, action.target, action.id);
    case UPDATE_TASK:
      return updateTask(state, action.target, action.id, action.job);
    case REQUEST_DATA:
      return Object.assign({}, state, {isLoading: true});
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        board: action.json
      });
    default:
      return state;
  }
}
