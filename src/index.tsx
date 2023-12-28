import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

// Apply the polyfills and bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
