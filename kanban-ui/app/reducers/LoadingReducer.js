import { REQ_ADD_TASK, REQUEST_BOARD, RECEIVE_BOARD, RES_ADD_TASK} from '../constants/KanbanActionType';

const initLoadingState = {
  backlog: false,
  open: false,
  processing: false,
  done: false
};

export default function loadingReducer(state = initLoadingState, action){

  switch (action.type) {
    case REQ_ADD_TASK:
      return Object.assign({}, state, {
        [action.target]: true
      });
    case REQUEST_BOARD:
      return Object.assign({}, state, {
        backlog: true,
        open: true,
        processing: true,
        done: true
      });
    case RECEIVE_BOARD:
      return Object.assign({}, state, {
        backlog: false,
        open: false,
        processing: false,
        done: false
      });
    case RES_ADD_TASK:
      return Object.assign({}, state, {
        [action.target]: false
      });
    default:
      return state;
  }
}
