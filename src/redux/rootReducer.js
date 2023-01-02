import { combineReducers } from "redux";

//Reducers
import { userReducer } from "./user/userReducer";
import { examReducer } from "./exam/examReducer";

const rootReducer = combineReducers({
  user: userReducer,
  exam: examReducer,
});

export default rootReducer;
