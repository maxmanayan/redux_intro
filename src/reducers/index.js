import { combineReducers } from "redux";
import todos from "./todos";


const rootReducer = combineReducers({
  todos
  // add other reducers
})


export default rootReducer