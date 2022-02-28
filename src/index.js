import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import createSagaMiddleware from '@redux-saga/core';
import './containers/App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { pokemonReducer } from './reducers/pokemonReducer';
import { pokemonSaga } from './sagas/sagas.jsx'

const sagaMiddleware = createSagaMiddleware();

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(sagaMiddleware));

const store = createStore(pokemonReducer, composedEnhancers);

sagaMiddleware.run(pokemonSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
