import ActionTypes from './actionTypes';

const INITIAL_STATE = {
  isSignIn: false,
  isSignUp: false,
  username: '',
  name: '',
  role: null,
  token: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        username: action.payload.username,
        name: action.payload.name,
        role: action.payload.role
      };
    case ActionTypes.SIGN_UP:
      return { ...state, isSignUp: action.payload };
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.REMOVE_TOKEN:
      return { ...state, username: '', name: '', token: '' };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        username: '',
        name: '',
        token: '',
        isSignIn: false,
        isSignUp: false
      };
    case ActionTypes.UPDATE_PROFILE:
      return { ...state, name: action.payload };
    default:
      return { ...state };
  }
};

export default userReducer;
