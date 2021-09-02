import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
} from './type';

export const authenticationRequest = () => ({
  type: AUTHENTICATION_REQUEST,
});

export const authenticationSuccess = () => ({
  type: AUTHENTICATION_SUCCESS,
  payload: true,
});

export const authenticationFailure = () => ({
  type: AUTHENTICATION_FAILURE,
  payload: false,
});

export type UserActionRequest =
  | ReturnType<typeof authenticationRequest>
  | ReturnType<typeof authenticationSuccess>
  | ReturnType<typeof authenticationFailure>;
