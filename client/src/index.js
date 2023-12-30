import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './app';

// Custom middleware to handle async actions
const asyncMiddleware = ({ dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(asyncMiddleware),
    // Add other middleware or enhancers here if needed
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
