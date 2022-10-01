import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { isOpen } from "./isOpen/isOpen.Reducer";
import { TimeTrackerReducer } from "./Timer/TimeReducer";
import { teamReducer } from "./Team/team.reducer";
import { projectReducer } from "./Project/project.reducer";

const rootReducer = combineReducers({
  time: TimeTrackerReducer,
  auth: authReducer,
  checkOpen: isOpen,
  team: teamReducer,
  project: projectReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
