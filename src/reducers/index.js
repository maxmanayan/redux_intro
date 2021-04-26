import { combineReducers } from "redux";
import todos from "./todos";
import nextID from "./nextID";
import filter from "./filter";


const rootReducer = combineReducers({
  todos,
  nextID,
  filter,
  // add other reducers
})


export default rootReducer