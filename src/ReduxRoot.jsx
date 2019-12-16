import * as React from 'react';
import { Provider } from 'react-redux';
import Router from 'layouts/Router/Router';
import Footer from 'layouts/Footer/Footer';
import HeaderNav from 'layouts/Header/HeaderNav';
import store from './store';

function ReduxRoot() {
  return (
    <Provider store={store}>
      <div>
        <HeaderNav />
        <Router />
        <Footer whiteFont />
      </div>
    </Provider>
  );
}

export default ReduxRoot;
