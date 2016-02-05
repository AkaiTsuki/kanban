import boardReducer from './BoardReducer'
import initReducer from './InitReducer'
import loadingReducer from './LoadingReducer'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  isLoading: loadingReducer,
  initialized: initReducer,
  board: boardReducer
});

export default rootReducer;
