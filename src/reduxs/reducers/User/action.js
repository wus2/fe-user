import * as UserHandler from 'reduxs/handlers/UserHandler';
import { isNull } from 'util';
import history from 'historyConfig';
import ActionTypes from './actionTypes';

export const emitSignInAction = user => {
  return {
    type: ActionTypes.SIGN_IN,
    payload: user
  };
};

export const emitSignUpAction = () => {
  return {
    type: ActionTypes.SIGN_UP,
    payload: true
  };
};

export const emitSetTokenAction = token => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: token
  };
};

export const emitRemoveTokenAction = () => {
  return {
    type: ActionTypes.REMOVE_TOKEN,
    payload: null
  };
};

export const SignIn = (username, password) => async dispatch => {
  const responseData = await UserHandler.SignIn(username, password);
  if (!isNull(responseData)) {
    console.log(responseData);
    const { token, payload } = responseData;
    window.localStorage.setItem('token', token);
    dispatch(emitSetTokenAction(token));
    dispatch(emitSignInAction(payload));
    history.push('/');
  }
};

export const SignUp = (nickname, username, password) => async dispatch => {
  const responseData = await UserHandler.SignUp(nickname, username, password);

  if (
    !isNull(responseData) &&
    responseData.messages.indexOf('Success') !== -1
  ) {
    dispatch(emitSignUpAction(username, password));
    history.push('/signin');
  }
};

export const SetToken = token => async dispatch => {
  dispatch(emitSetTokenAction(token));
};

export const RemoveToken = () => async dispatch => {
  dispatch(emitRemoveTokenAction());
};
