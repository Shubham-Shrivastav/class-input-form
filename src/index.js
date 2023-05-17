import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();