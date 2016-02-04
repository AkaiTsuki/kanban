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

const initState = {
  backlog: {
    title: "BackLog",
    tasks: [
      {
        id: uuid.v4(),
        job: 'Backlog Task 1'
      },
      {
        id: uuid.v4(),
        job: 'Backlog Task 2, add new search feature for important customers'
      }
    ]
  },
  open: {
    title: "Open",
    tasks: [
      {
        id: uuid.v4(),
        job: 'Opened task'
      }
    ]
  },
  inProcess: {
    title: "In Process",
    tasks: [
      {
        id: uuid.v4(),
        job: 'In process task'
      }
    ]
  },
  done: {
    title: "Done",
    tasks: [
      {
        id: uuid.v4(),
        job: 'Finished Task'
      }
    ]
  }
};

const loggerMiddleware = createLogger()
const store = createStore(KanbanReducer, {isLoading: true}, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
