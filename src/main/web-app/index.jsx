import React from 'react';
import ReactDom from 'react-dom';
import App from './main/app'
import {appReducers} from './main/appReducers'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(appReducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));