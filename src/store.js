import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducers from './reduxs/reducers/index';

const store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

export default store;
