import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
} from './type';

export const authenticationRequest = (code: string, stateCode: string) => ({
  type: AUTHENTICATION_REQUEST,
  code,
  stateCode,
});

export const authenticationSuccess = (accessToken: string) => ({
  type: AUTHENTICATION_SUCCESS,
  payload: accessToken,
});

export const authenticationFailure = () => ({
  type: AUTHENTICATION_FAILURE,
  payload: '',
});

export type UserActionRequest =
  | ReturnType<typeof authenticationRequest>
  | ReturnType<typeof authenticationSuccess>
  | ReturnType<typeof authenticationFailure>;
