import { RECEIVE_ADD_TASK,RECEIVE_BOARD, RECEIVE_UPDATE_TASK,RECEIVE_DELETE_TASK } from '../constants/KanbanActionType';

function addTask(state, task, target){
  var board = Object.assign({}, state);
  board[target].tasks = [task, ...board[target].tasks];

  return board;
}

function deleteTask(state, payload, target){
  var board = Object.assign({}, state);
  board[target].tasks = board[target].tasks.filter(task => task.id !== payload.id);

  return board;
}

function updateTask(state, updatedTask, target){
  var board = Object.assign({}, state);
  board[target].tasks = board[target].tasks.map(task => {
    if(task.id === updatedTask.id) {
      return updatedTask
    } else {
      return task;
    }
  });
  return board;
}

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOARD:
      return action.json
    case RECEIVE_ADD_TASK:
      return addTask(state, action.json, action.target);
    case RECEIVE_UPDATE_TASK:
      return updateTask(state, action.json, action.target);
    case RECEIVE_DELETE_TASK:
      return deleteTask(state, action.json, action.target);
    default:
      return state;
  }
}

export default boardReducer
