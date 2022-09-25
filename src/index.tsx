import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';

const rootContainer = document.getElementById('root');
if(!rootContainer) {
  throw new Error('Root container not found.');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
