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

export function requestUpdateTask(laneId, taskId){
  return {
    type: ActionType.REQUEST_UPDATE_TASK,
    target: laneId,
    id: taskId
  }
}

export function responseUpdateTask(json, target){
  return {
    type: ActionType.RECEIVE_UPDATE_TASK,
    target,
    json
  }
}

export function requestDeleteTask(target, id){
  return {
    type: ActionType.REQUEST_DELETE_TASK,
    target,
    id
  }
}

export function responseDeleteTask(json, target){
  return {
    type: ActionType.RECEIVE_DELETE_TASK,
    json,
    target
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

export function updateTask(laneId, taskId, text){
  return (dispatch, state) => {
    dispatch(requestUpdateTask(laneId, taskId));
    var body = JSON.stringify({id: taskId, target: laneId, text: text});
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    return fetch('http://localhost:3000/api/board', {method: 'PUT', headers: headers, body: body}).then(res=>res.json()).then(json=>dispatch(responseUpdateTask(json, laneId)));
  }
}

export function deleteTask(laneId, taskId){
  return (dispatch, state)=>{
    dispatch(requestDeleteTask(laneId, taskId));
    var body = JSON.stringify({target: laneId, taskId});
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    return fetch('http://localhost:3000/api/board', {method: 'DELETE', headers: headers, body: body}).then(res=>res.json()).then(json=>dispatch(responseDeleteTask(json, laneId)));
  };
}
