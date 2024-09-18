import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store.js';
import App from './App.jsx';

const root = createRoot(document.getElementById('contents'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
