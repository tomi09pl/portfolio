import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import 'normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
