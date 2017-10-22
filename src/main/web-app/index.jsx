import React from 'react';
import ReactDom from 'react-dom';
import App from './main/app'
import {appReducers} from './main/appReducers'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promisse from 'redux-promise'
import thunk from 'redux-thunk'

const store = applyMiddleware(promisse,thunk) (createStore)(appReducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));