import { createStore, applyMiddleware, combineReducers } from "redux";
import thunks from "redux-thunk";
import { createLogger } from "redux-logger";

import user from "./user/reducer";
import { login, register } from "./user/thunks";

const reducer = combineReducers({
  user,
});

const store = createStore(
  reducer,
  applyMiddleware(thunks, createLogger({ collapsed: true }))
);

export default store;

export { login, register };
