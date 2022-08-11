import { combineReducers } from "redux";
import userReducer from "./userReducer";
import RegisterUser from "./RegitserUserReducer";
import propertyReducer from "./propertyReducer";

const RootReducer = combineReducers({
  user: userReducer,
  newUser: RegisterUser,
  propertySearch: propertyReducer,
});

export default RootReducer;
