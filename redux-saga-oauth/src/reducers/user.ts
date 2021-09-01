import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILURE,
  AuthorizationProps,
} from '../actions/type';

import { UserActionRequest } from '../actions/user';

export const initialState: AuthorizationProps = {
  authorization: false,
};

export const user = (
  state: AuthorizationProps = initialState,
  action: UserActionRequest,
) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
      };
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        authorization: action.payload,
      };
    case AUTHORIZATION_FAILURE:
      return {
        ...state,
        authorization: action.payload,
      };
    default:
      return state;
  }
};

export default user;
