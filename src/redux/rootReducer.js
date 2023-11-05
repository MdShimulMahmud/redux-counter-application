import { combineReducers } from "redux";
import counterReducer from "../redux/counter/counterReducer";

import dynamicCounterReducer from "../redux/dynamicCounter/dynamicCounterReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
