import { combineReducers } from "redux";
import renderReducer from "./renderReducer/renderReducer";

const rootReducer = combineReducers({
  path: renderReducer,
});

export default rootReducer;
