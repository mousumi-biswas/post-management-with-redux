import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
  postList: postReducer,
});

export default rootReducer;
