import './main.css';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
//
// ReactDOM.render(<App />, document.getElementById('app'));
//

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NoteReducer from './reducers/NoteReducer'
import App from './components/App.jsx'

const store = createStore(NoteReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
