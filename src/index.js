/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-04-12 09:22:14
 * @LastEditTime: 2021-04-12 16:20:09
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux'
import Router from './router'
import './index.less';
import config from './redux/store'
const store = config()

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
