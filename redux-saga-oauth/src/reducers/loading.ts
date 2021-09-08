import { LOADING_START, LOADING_END, LoadingProps } from '../actions/type';

import { LoadingActionRequest } from '../actions/loading';

export const initialState: LoadingProps = {
  isLoading: false,
};

export const loading = (state = initialState, action: LoadingActionRequest) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loading;
