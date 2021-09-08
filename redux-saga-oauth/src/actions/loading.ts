import { LOADING_START, LOADING_END } from './type';

export const loadingStart = (isLoading: boolean) => ({
  type: LOADING_START,
  isLoading,
});

export const loadingEnd = (isLoading: boolean) => ({
  type: LOADING_END,
  isLoading,
});

export type LoadingActionRequest =
  | ReturnType<typeof loadingStart>
  | ReturnType<typeof loadingEnd>;
