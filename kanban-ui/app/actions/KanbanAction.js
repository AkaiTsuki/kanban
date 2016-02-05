import * as ActionType from '../constants/KanbanActionType';
import fetch from 'isomorphic-fetch';

export function requestAddTask(target) {
  return {
    type: ActionType.REQUEST_ADD_TASK,
    target
  }
}

export function responseAddTask(json, target){
  return {
    type: ActionType.RECEIVE_ADD_TASK,
    target,
    json
  }
}

export function deleteTask(target, id) {
  return {
    type: ActionType.DELETE_TASK,
    target: target,
    id
  };
}

export function updateTask(target, id, job){
  return {
    type: ActionType.UPDATE_TASK,
    target,
    id,
    job
  };
}

export function requestBoard(){
  return {
    type: ActionType.REQUEST_BOARD
  };
}

export function receiveBoard(json){
  return {
    type: ActionType.RECEIVE_BOARD,
    json
  }
}

export function loadBoard(){
  return (dispatch,state) => {
    dispatch(requestBoard());
    return fetch('http://localhost:3000/api/board').then(req => req.json()).then(json => dispatch(receiveBoard(json)));
  };
}

export function createTask(laneId){
  return (dispatch, state) => {
    dispatch(requestAddTask(laneId));
    var body = JSON.stringify({target: laneId, task: {job: "new job"}});
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    return fetch('http://localhost:3000/api/board', {method: 'POST', headers: headers, body: body}).then(res=>res.json()).then(json=>dispatch(responseAddTask(json, laneId)));
  };
}

// export function updateTask(laneId, taskId, text){
//   return (dispatch, state) => {
//     dispatch(requestUpdateTask(laneId, taskId));
//
//   }
// }
