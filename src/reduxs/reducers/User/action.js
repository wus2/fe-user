import * as UserHandler from 'reduxs/handlers/UserHandler';
import { isNull } from 'util';
import history from 'historyConfig';
import store from 'store';
import io from 'socket.io-client';
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

export const emitSetErrorAction = errors => {
  return {
    type: ActionTypes.GET_ERROR,
    payload: errors
  };
};

export const emitRemoveErrorAction = () => {
  return {
    type: ActionTypes.REMOVE_ERROR
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
    const { token, user, code, message } = responseData;
    if (code === 1) {
      window.localStorage.setItem('token', token);
      dispatch(emitSetTokenAction(token));
      dispatch(emitSignInAction(user));
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const SignUp = state => async dispatch => {
  const responseData = await UserHandler.SignUp(state);
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      dispatch(emitRemoveErrorAction());
      dispatch(emitSignUpAction());
      return history.push('/user/login');
    }
    dispatch(emitSetErrorAction(message));
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
  return history.push('/');
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
  const rs = await UserHandler.GetProfile();
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      const { data } = rs;
      dispatch(emitGetProfile(data));
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const UpdatePassword = state => async dispatch => {
  const responseData = await UserHandler.UpdatePassword(state);
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      window.localStorage.removeItem('token');
      dispatch(emitSignOut());
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const UpdateAvatar = data => async dispatch => {
  const responseData = await UserHandler.UpdateAvatar(data);
  const rs = await UserHandler.GetProfile();
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      const { data } = rs;
      dispatch(emitGetProfile(data));
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const UpdateSkill = skills => async dispatch => {
  const responseData = await UserHandler.UpdateSkill(skills);
  const rs = await UserHandler.GetProfile();
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      const { data } = rs;
      dispatch(emitGetProfile(data));
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const UpdateIntroduce = introDesc => async dispatch => {
  const responseData = await UserHandler.UpdateIntroduce(introDesc);
  const rs = await UserHandler.GetProfile();
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      const { data } = rs;
      dispatch(emitGetProfile(data));
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const emitGetSkills = skills => {
  return {
    type: ActionTypes.GET_SKILLS,
    payload: skills
  };
};

export const GetSkills = () => async dispatch => {
  const responseData = await UserHandler.GetSkills();
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      const arr = [];
      data.map(item => {
        return arr.push(item.tag);
      });
      dispatch(emitGetSkills(arr));
    }
  }
};

export const emitGetListTutor = tutors => {
  return {
    type: ActionTypes.GET_LIST_TUTOR,
    payload: tutors
  };
};

export const GetListTutor = offset => async dispatch => {
  const responseData = await UserHandler.GetListTutor(offset);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetListTutor(data));
    }
  }
};

export const emitGetTutorProfile = data => {
  return {
    type: ActionTypes.GET_TUTOR_PROFILE,
    payload: data
  };
};

export const GetTutorProfile = tutorID => async dispatch => {
  const responseData = await UserHandler.GetProfileTutor(tutorID);
  if (!isNull(responseData)) {
    const { code, data, message } = responseData;
    if (code === 1) {
      dispatch(emitGetTutorProfile(data));
      dispatch(emitRemoveErrorAction());
      return history.push(`tutor/introduce/${tutorID}`);
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const emitRentTutor = name => {
  return {
    type: ActionTypes.RENT_TUTOR,
    payload: null
  };
};

export const RentTutor = state => async dispatch => {
  const responseData = await UserHandler.RentTutor(state);
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const emitCreateSocket = socket => {
  return {
    type: ActionTypes.CREATE_SOCKET,
    payload: socket
  };
};

export const CreateSocket = () => async dispatch => {
  const socket = io('192.168.1.230:55210');
  dispatch(emitCreateSocket(socket));
};

export const emitGetListNoti = noti => {
  return {
    type: ActionTypes.GET_LIST_NOTI,
    payload: noti
  };
};

export const GetListNoti = offset => async dispatch => {
  const responseData = await UserHandler.GetListNoti(offset);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetListNoti(data));
    }
  }
};

export const emitGetListHisDeal = noti => {
  return {
    type: ActionTypes.GET_LIST_NOTI,
    payload: noti
  };
};

export const GetListHisDeal = offset => async dispatch => {
  const responseData = await UserHandler.GetListHisDeal(offset);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetListNoti(data));
    }
  }
};
