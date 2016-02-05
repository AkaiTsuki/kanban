import { DELETE_TASK, UPDATE_TASK, REQUEST_DATA, RECEIVE_DATA,REQ_ADD_TASK,RES_ADD_TASK,REQUEST_BOARD,RECEIVE_BOARD } from '../constants/KanbanActionType';
import boardReducer from './BoardReducer'
import initReducer from './InitReducer'
import loadingReducer from './LoadingReducer'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  isLoading: loadingReducer,
  isInit: initReducer,
  board: boardReducer
});

export default rootReducer;
