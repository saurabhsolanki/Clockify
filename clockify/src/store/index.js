import { legacy_createStore ,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./Auth/authReducer"
import { TimeTrackerReducer } from "./Timer/TimeReducer"

const rootReducer = combineReducers({
    time: TimeTrackerReducer,
    auth:authReducer
})


export const store =legacy_createStore(rootReducer,applyMiddleware(thunk))

