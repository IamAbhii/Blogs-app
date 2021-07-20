import { combineReducers } from "redux";
import { getPostsReducer } from "./postReducer";

const rootReducer = combineReducers({
  posts: getPostsReducer
});

export default rootReducer;
