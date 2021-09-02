import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  AuthenticationProps,
} from '../actions/type';

import { UserActionRequest } from '../actions/user';

export const initialState: AuthenticationProps = {
  accessToken: '',
};

export const user = (
  state: AuthenticationProps = initialState,
  action: UserActionRequest,
) => {
  switch (action.type) {
    case AUTHENTICATION_REQUEST:
      return {
        ...state,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
      };
    case AUTHENTICATION_FAILURE:
      return {
        ...state,
        accessToken: action.payload,
      };
    default:
      return state;
  }
};

export default user;
