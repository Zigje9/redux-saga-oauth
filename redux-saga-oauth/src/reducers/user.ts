import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AuthProps,
} from '../actions/type';

import { UserActionRequest } from '../actions/user';

export const initialState: AuthProps = {
  accessToken: '',
  code: '',
  stateCode: '',
  isLogin: false,
  userId: '',
};

export const user = (state = initialState, action: UserActionRequest) => {
  switch (action.type) {
    case AUTHENTICATION_REQUEST:
      return {
        ...state,
        code: action.code,
        stateCode: action.stateCode,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case AUTHENTICATION_FAILURE:
      return {
        ...state,
        accessToken: 'None',
      };
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin,
        userId: action.userId,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogin: action.isLogin,
        userId: '',
      };
    default:
      return state;
  }
};

export default user;
