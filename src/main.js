import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './app';
import reducers from './reducers';
import ReduxPromise from 'redux-promise'
require("file-loader?name=index.html!./index.html");
require("file-loader?name=style.css!./style/style.css");


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  , document.querySelector('.container'));
