import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './type';

export const authenticationRequest = (
  code: string,
  stateCode: string,
  site: string,
) => ({
  type: AUTHENTICATION_REQUEST,
  code,
  stateCode,
  site,
});

export const authenticationSuccess = (accessToken: string) => ({
  type: AUTHENTICATION_SUCCESS,
  accessToken,
});

export const authenticationFailure = () => ({
  type: AUTHENTICATION_FAILURE,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (isLogin: boolean, userId: string) => ({
  type: LOGIN_SUCCESS,
  isLogin,
  userId,
});

export const loginFailure = (isLogin: boolean, userId: string) => ({
  type: LOGIN_FAILURE,
  isLogin,
  userId,
});

export type UserActionRequest =
  | ReturnType<typeof authenticationRequest>
  | ReturnType<typeof authenticationSuccess>
  | ReturnType<typeof authenticationFailure>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;
