import { DYNAMICCOUNT_DECREMENT, DYNAMICCOUNT_INCREMENT } from "./actionTypes";

const initialState = {
  count: 0,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMICCOUNT_INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DYNAMICCOUNT_DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default dynamicCounterReducer;
