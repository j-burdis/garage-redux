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
import CarsIndex from './containers/cars_index';

// Get garage name from localStorage or prompt user
const getGarageName = () => {
  const storedGarageName = localStorage.getItem("garageName");
  if (storedGarageName) {
    return storedGarageName;
  } else {
    const newGarageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
    localStorage.setItem("garageName", newGarageName);
    return newGarageName;
  }
};

const garageName = getGarageName();

const rootReducer = combineReducers({
  garage: (state = garageName, action) => state, 
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
        <Route path="/" element={<CarsIndex />} />
      </Routes>
    </Router>
  </Provider>,
);
