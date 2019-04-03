import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import Root from './router/index.js'
import { Provider } from 'react-redux';
import store from './store/index.js';

const mountNode = document.getElementById('root');
ReactDOM.render(<Provider store={store}><BrowserRouter><Root/></BrowserRouter></Provider>, mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
