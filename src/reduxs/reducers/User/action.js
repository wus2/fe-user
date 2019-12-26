import * as UserHandler from 'reduxs/handlers/UserHandler';
import { isNull } from 'util';
import history from 'historyConfig';
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
      return history.push(`/tutor/introduce/${tutorID}`);
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const emitGetComment = data => {
  return {
    type: ActionTypes.GET_COMMENT,
    payload: data
  };
};

export const GetComment = tutorID => async dispatch => {
  const responseData = await UserHandler.GetComment(tutorID);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      return dispatch(emitGetComment(data));
    }
    dispatch(emitGetComment(null));
  }
};

export const emitRentTutor = () => {
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
  const socket = io('https://wusbeuser.herokuapp.com');
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

export const emitGetListHisDeal = his => {
  return {
    type: ActionTypes.GET_LIST_HIS,
    payload: his
  };
};

export const GetListHisDeal = offset => async dispatch => {
  const responseData = await UserHandler.GetListHisDeal(offset);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetListHisDeal(data));
    }
  }
};

export const emitGetDetailDeal = detail => {
  return {
    type: ActionTypes.GET_DETAIL_DEAL,
    payload: detail
  };
};

export const GetDetailDeal = contractID => async dispatch => {
  const responseData = await UserHandler.GetDetailDeal(contractID);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetDetailDeal(data));
      history.push(`/contract/${contractID}`);
    }
  }
};

export const FilterTutor = (offset, state) => async dispatch => {
  const responseData = await UserHandler.FilterTutor(offset, state);
  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetListTutor(data));
    }
  }
};

export const emitPayment = () => {
  return {
    type: ActionTypes.PAYMENT
  };
};

export const Payment = contractID => async dispatch => {
  const responseData = await UserHandler.Payment(contractID);
  if (!isNull(responseData)) {
    const { code } = responseData;
    if (code === 1) {
      dispatch(emitPayment());
    }
  }
};

export const emitEvaluate = () => {
  return {
    type: ActionTypes.EVALUATE
  };
};

export const Evaluate = (contractID, state) => async dispatch => {
  const responseData = await UserHandler.Evaluate(contractID, state);
  if (!isNull(responseData)) {
    const { code } = responseData;
    if (code === 1) {
      dispatch(emitEvaluate());
    }
  }
};

export const emitGetTopTutor = tutors => {
  return {
    type: ActionTypes.GET_TOP_TUTOR,
    payload: tutors
  };
};

export const GetTopTutor = () => async dispatch => {
  const responseData = await UserHandler.GetTopTutor();

  if (!isNull(responseData)) {
    const { code, data } = responseData;
    if (code === 1) {
      dispatch(emitGetTopTutor(data));
    }
  }
};

export const ForgotPassword = email => async dispatch => {
  const responseData = await UserHandler.ForgotPassword(email);
  if (!isNull(responseData)) {
    const { code, message } = responseData;
    if (code === 1) {
      window.localStorage.removeItem('token');
      dispatch(emitRemoveErrorAction());
      return history.push('/');
    }
    dispatch(emitSetErrorAction(message));
  }
};

export const PostStatusContract = (contractID, status) => async dispatch => {
  const responseData = await UserHandler.PostStatusContract(contractID, status);
  if (!isNull(responseData)) {
    const { code } = responseData;
    if (code === 1) {
      return history.push(`/`);
    }
  }
};

export const emitGetAllListBegin = object => {
  return {
    type: ActionTypes.GET_ALL_LIST,
    payload: object
  };
};

export const GetAllListBegin = offset => async dispatch => {
  const responseData1 = await UserHandler.GetListTutor(offset);
  const responseData2 = await UserHandler.GetSkills();
  const responseData3 = await UserHandler.GetTopTutor();

  if (
    !isNull(responseData1) &&
    !isNull(responseData2) &&
    !isNull(responseData3)
  ) {
    const code1 = responseData1.code;
    const code2 = responseData2.code;
    const code3 = responseData3.code;
    const data2 = responseData2.data;

    if (code1 === 1 && code2 === 1 && code3 === 1) {
      const arr = [];
      data2.map(item => {
        return arr.push(item.tag);
      });
      const object = {
        tutors: responseData1.data,
        skills: arr,
        topTutor: responseData3.data
      };
      dispatch(emitGetAllListBegin(object));
    }
  }
};
