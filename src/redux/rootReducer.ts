import socketReducer from "./socket/reducer";
import chartReducer from "./api/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  socket: socketReducer,
  apiData: chartReducer,
});
export default rootReducer;
