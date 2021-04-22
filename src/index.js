import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Router from './router'
import config from './redux/store'
import './index.less';
import 'nprogress/nprogress.css'

ReactDOM.render(
  <Provider store={config()}> 
    <Router />
  </Provider>,
  document.getElementById('root')
);
