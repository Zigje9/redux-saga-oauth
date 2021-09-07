import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
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

export type UserActionRequest =
  | ReturnType<typeof authenticationRequest>
  | ReturnType<typeof authenticationSuccess>
  | ReturnType<typeof authenticationFailure>;
