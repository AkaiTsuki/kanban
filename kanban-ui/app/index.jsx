import './main.css';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
//
// ReactDOM.render(<App />, document.getElementById('app'));
//
import uuid from 'node-uuid';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import KanbanReducer from './reducers/KanbanReducer'
import App from './containers/App.jsx'


const loggerMiddleware = createLogger();
const initState = {
  isLoading : {
    backlog: true,
    open: true,
    inProcess: true,
    done: true
  },
  board: {
    backlog: {
      title: "BackLog",
      tasks: []
    },
    open: {
      title: "Open",
      tasks: []
    },
    inProcess: {
      title: "In Process",
      tasks: []
    },
    done: {
      title: "Done",
      tasks: []
    }
  }
};
const store = createStore(KanbanReducer, initState, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
