import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import '../assets/stylesheets/application.scss';
import logger from 'redux-logger';

import carsReducer from './reducers/cars_reducer.js'

const rootReducer = combineReducers({
  cars: carsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, reduxPromise),
})

const history = createBrowserHistory();

// render an instance of the component in the DOM
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
      </Routes>
    </Router>
  </Provider>,
);
