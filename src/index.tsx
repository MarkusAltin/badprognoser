import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw new Error('Root container not found.');
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
