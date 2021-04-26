import { combineReducers } from "redux";
import todos from "./todos";
import nextID from "./nextID";


const rootReducer = combineReducers({
  todos,
  nextID
  // add other reducers
})


export default rootReducer