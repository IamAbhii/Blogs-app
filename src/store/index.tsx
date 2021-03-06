import {createStore} from "redux";
import rootReducer from "../reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export type AppState = ReturnType<typeof rootReducer>
export default store;