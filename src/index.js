import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk';
import './containers/App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { pokemonReducer } from './reducers/pokemonReducer';
import { logActions, reportError } from './middlewares/index.jsx';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logActions, reportError)
);


const store = createStore(pokemonReducer, composedEnhancers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
