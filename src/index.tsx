import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';
import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw new Error('Root container not found.');
}
const root = createRoot(rootContainer)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
