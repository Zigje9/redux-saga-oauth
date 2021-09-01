/* AUTHORIZATION ACTION TYPE */
export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST' as const;
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS' as const;
export const AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE' as const;

export interface AuthorizationProps {
  authorization: boolean;
}
