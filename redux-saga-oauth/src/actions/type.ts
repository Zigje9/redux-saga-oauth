/* AUTHENTICATION ACTION TYPE */
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST' as const;
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS' as const;
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE' as const;

export interface AuthenticationProps {
  accessToken: string;
  code: string;
  stateCode: string;
}
