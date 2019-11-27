import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import RootReducers from './reduxs/reducers/index';

const store = createStore(
  RootReducers,
  compose(
    applyMiddleware(thunkMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
