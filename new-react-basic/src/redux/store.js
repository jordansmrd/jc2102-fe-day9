//storage tempat penyimpanan reducers
import { combineReducers } from "redux";
import userReducer from "./reducers/user/user";
import counterReducer from "./reducers/counter/counter";

const rootReducer = combineReducers({
  auth: userReducer,
  counter: counterReducer,
});

export default rootReducer;
