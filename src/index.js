import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import store from './redux/store';
import { myAction, myAction_2, myActionCreator } from './redux/actions';
import './index.css';

console.log(store);
console.log(store.getState());
store.dispatch(myAction);
store.dispatch(myAction_2);
store.dispatch(myActionCreator(5));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
