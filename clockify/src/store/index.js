import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { isOpen } from "./isOpen/isOpen.Reducer";
import { TimeTrackerReducer } from "./Timer/TimeReducer";

const rootReducer = combineReducers({
  time: TimeTrackerReducer,
  auth: authReducer,
  checkOpen: isOpen,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
