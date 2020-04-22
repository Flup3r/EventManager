import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import {createBrowserHistory} from 'history';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from "./app/layout/ScrollToTop";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/stores/store';





export const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
