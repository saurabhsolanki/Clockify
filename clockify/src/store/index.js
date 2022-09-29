import { legacy_createStore ,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { TimeTrackerReducer } from "./Timer/TimeReducer"

const rootReducer = combineReducers({
    time:TimeTrackerReducer
})


export const store =legacy_createStore(rootReducer,applyMiddleware(thunk))
// export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));

