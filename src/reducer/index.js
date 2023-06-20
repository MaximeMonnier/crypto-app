import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./stable.reducer";

export default combineReducers({
  //Reducers
  stableReducer,
  listReducer,
});
