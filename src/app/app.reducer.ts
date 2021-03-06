export interface State {
  isLoading: boolean;
}

export const initialState = {
  isLoading: false
};

export function appReducer(state = initialState, action) {

  switch (action.type) {
    case 'IS_LOADING': {
      return{
        isLoading: true
      }
    }
    case 'STOP_LOADING': {
      return{
        isLoading: false
      }
    }
    default:
      return state;
  }
}
