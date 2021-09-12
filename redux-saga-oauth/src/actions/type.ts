/* AUTH ACTION TYPE */
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST' as const;
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS' as const;
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE' as const;

export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'LOGIN_FAILURE' as const;
export interface AuthProps {
  accessToken: string;
  code: string;
  stateCode: string;
  isLogin: boolean;
  userId: string;
}

/* LOADING ACTION TYPE */
export const LOADING_START = 'LOADING_START' as const;
export const LOADING_END = 'LOADING_END' as const;

export interface LoadingProps {
  isLoading: boolean;
}
