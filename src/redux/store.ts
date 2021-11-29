import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, thunkMiddleware));
export default store;
