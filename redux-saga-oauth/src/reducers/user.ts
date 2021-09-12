import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  AuthProps,
} from '../actions/type';

import { UserActionRequest } from '../actions/user';

export const initialState: AuthProps = {
  accessToken: '',
  code: '',
  stateCode: '',
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
    default:
      return state;
  }
};

export default user;
