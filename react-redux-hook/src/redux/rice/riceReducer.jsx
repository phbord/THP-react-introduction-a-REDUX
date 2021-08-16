import { BUY_RICE, REMOVE_RICE } from './riceTypes';

const initialState = {
  rice: 5
};

const riceReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_RICE:
      return {
        ...state,
        rice: state.rice + 1
      };
    case REMOVE_RICE:
      return {
        ...state,
        rice: state.rice - 1
      };
    default:
      return state;
  }
}

export default riceReducer;