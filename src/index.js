import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myStore from './store';

const render = () =>
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root'),
  );

myStore.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
