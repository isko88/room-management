import { createStore } from "redux";
import reducer from "../reducer/index";
import { applyMiddleware } from "redux";

export const store = createStore(reducer);
