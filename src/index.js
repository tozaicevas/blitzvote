import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './state';
import App from './App';

const store = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)