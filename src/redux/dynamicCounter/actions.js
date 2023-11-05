import { DYNAMICCOUNT_DECREMENT, DYNAMICCOUNT_INCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: DYNAMICCOUNT_INCREMENT,
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: DYNAMICCOUNT_DECREMENT,
    payload: value,
  };
};
