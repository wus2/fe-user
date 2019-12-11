import * as React from 'react';
import { Provider } from 'react-redux';
import Router from 'layouts/Router/Router';
import store from './store';

function ReduxRoot() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default ReduxRoot;
