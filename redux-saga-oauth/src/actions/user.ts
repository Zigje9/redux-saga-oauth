import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILURE,
} from './type';

export const authorizationRequest = () => ({
  type: AUTHORIZATION_REQUEST,
});

export const authorizationSuccess = () => ({
  type: AUTHORIZATION_SUCCESS,
  payload: true,
});

export const authorizationFailure = () => ({
  type: AUTHORIZATION_FAILURE,
  payload: false,
});

export type UserActionRequest =
  | ReturnType<typeof authorizationRequest>
  | ReturnType<typeof authorizationSuccess>
  | ReturnType<typeof authorizationFailure>;
