import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TimeTrackerReducer } from "./Timer/TimeReducer";
import { teamReducer } from "./Team/team.reducer";

const rootReducer = combineReducers({
  time: TimeTrackerReducer,
  team: teamReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
