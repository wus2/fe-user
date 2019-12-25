import ActionTypes from './actionTypes';

const INITIAL_STATE = {
  isSignIn: false,
  isSignUp: false,
  username: null,
  avatar: null,
  name: null,
  role: null,
  token: null,
  user: null,
  skills: null,
  tutors: null,
  errors: null,
  tutor: null,
  socket: null,
  notification: null,
  historyDeal: null,
  detailDeal: null,
  topTutor: null,
  comments: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        username: action.payload.username,
        name: action.payload.name,
        role: action.payload.role,
        avatar: action.payload.avatar
      };
    case ActionTypes.SIGN_UP:
      return { ...state, isSignUp: action.payload };
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.REMOVE_TOKEN:
      return {
        ...state,
        username: null,
        name: null,
        token: null,
        avatar: null
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        username: null,
        name: null,
        token: null,
        isSignIn: false,
        isSignUp: false,
        user: null,
        avatar: null
      };
    case ActionTypes.GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        isSignIn: true,
        username: action.payload.username,
        name: action.payload.name,
        role: action.payload.role,
        avatar: action.payload.avatar
      };
    case ActionTypes.UPDATE_PROFILE:
      return { ...state, name: action.payload.name, user: action.payload.user };
    case ActionTypes.GET_SKILLS:
      return { ...state, skills: action.payload };
    case ActionTypes.GET_LIST_TUTOR:
      return { ...state, tutors: action.payload };
    case ActionTypes.GET_ERROR:
      return { ...state, errors: action.payload };
    case ActionTypes.REMOVE_ERROR:
      return { ...state, errors: null };
    case ActionTypes.GET_TUTOR_PROFILE:
      return { ...state, tutor: action.payload };
    case ActionTypes.RENT_TUTOR:
      return { ...state };
    case ActionTypes.CREATE_SOCKET:
      return { ...state, socket: action.payload };
    case ActionTypes.GET_LIST_NOTI:
      return { ...state, notification: action.payload };
    case ActionTypes.GET_LIST_HIS:
      return { ...state, historyDeal: action.payload };
    case ActionTypes.GET_DETAIL_DEAL:
      return { ...state, detailDeal: action.payload };
    case ActionTypes.PAYMENT:
      return { ...state };
    case ActionTypes.EVALUATE:
      return { ...state };
    case ActionTypes.GET_TOP_TUTOR:
      return { ...state, topTutor: action.payload };
    case ActionTypes.GET_COMMENT:
      return { ...state, comments: action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
