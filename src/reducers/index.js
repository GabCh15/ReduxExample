import { combineReducers } from "redux";
import { countReducer } from "./countReducer";

export var rootReducers = combineReducers({ countReducer });
