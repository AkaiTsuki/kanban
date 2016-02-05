import { REQUEST_BOARD, RECEIVE_BOARD} from '../constants/KanbanActionType';

export default function initReducer(state = true, action){
  switch (action.type){
    case REQUEST_BOARD:
      return false;
    case RECEIVE_BOARD:
      return true
    default:
      return state
  }
}
