import { combineReducers } from "redux";
import BTCMReducer from "./BTCMReducer";

export default combineReducers({  
  //OtherReducer:OtherReducer can be combined here
  BTCMReducer:BTCMReducer
});
