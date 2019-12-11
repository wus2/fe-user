import * as UserHandler from 'reduxs/handlers/UserHandler';
import { isNull } from 'util';
import history from 'historyConfig';
import store from 'store';
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

export const emitSignOut = () => {
  return {
    type: ActionTypes.SIGN_OUT
  };
};

export const SignIn = (username, password) => async dispatch => {
  const responseData = await UserHandler.SignIn(username, password);
  if (!isNull(responseData)) {
    const { token, user } = responseData;
    window.localStorage.setItem('token', token);
    dispatch(emitSetTokenAction(token));
    dispatch(emitSignInAction(user));
    history.push('/');
  }
};

export const SignUp = state => async dispatch => {
  const responseData = await UserHandler.SignUp(state);
  if (!isNull(responseData)) {
    dispatch(emitSignUpAction());
    history.push('/users/login');
  }
};

export const SetToken = token => async dispatch => {
  dispatch(emitSetTokenAction(token));
};

export const RemoveToken = () => async dispatch => {
  dispatch(emitRemoveTokenAction());
};

export const SignOut = () => async dispatch => {
  window.localStorage.removeItem('token');
  dispatch(emitSignOut());
  history.push('/');
};

export const emitGetProfile = user => {
  return {
    type: ActionTypes.GET_PROFILE,
    payload: user
  };
};

export const GetProfile = () => async dispatch => {
  const responseData = await UserHandler.GetProfile();
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetProfile(data));
      const { isSignIn } = store.getState().userState;
      if (!isSignIn) dispatch(emitSignInAction(data));
    }
  }
};

export const emitUpdateProfile = name => {
  return {
    type: ActionTypes.UPDATE_PROFILE,
    payload: name
  };
};

export const UpdateProfile = state => async dispatch => {
  const responseData = await UserHandler.UpdateProfile(state);
  if (!isNull(responseData)) {
    history.push('/');
  }
};

export const UpdatePassword = state => async dispatch => {
  const responseData = await UserHandler.UpdatePassword(state);
  if (!isNull(responseData)) {
    window.localStorage.removeItem('token');
    dispatch(emitSignOut());
    history.push('/');
  }
};

export const UpdateAvatar = data => async dispatch => {
  const responseData = await UserHandler.UpdateAvatar(data);
  if (!isNull(responseData)) {
    // dispatch(emitGetProfile(data));
    history.push('/');
  }
};

export const UpdateSkill = skills => async dispatch => {
  const responseData = await UserHandler.UpdateSkill(skills);
  if (!isNull(responseData)) {
    history.push('/');
  }
};

export const UpdateIntroduce = introDesc => async dispatch => {
  const responseData = await UserHandler.UpdateIntroduce(introDesc);
  if (!isNull(responseData)) {
    history.push('/');
  }
};
