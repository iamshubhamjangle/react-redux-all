import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import counterReducer from './reducer.js';
import { createStore } from 'redux';
import App from './App';

const root = createRoot(document.getElementById('root'));
const store = createStore(counterReducer);

root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>
);
