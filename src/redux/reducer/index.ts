import { combineReducers } from "redux";
import roomReducer from "./roomReducer";


const reducer = combineReducers({
  rooms: roomReducer!,
});

export default reducer;