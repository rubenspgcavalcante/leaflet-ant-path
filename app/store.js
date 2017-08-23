import {combineReducers, createStore, applyMiddleware} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {composeWithDevTools} from "redux-devtools-extension";

import {loadRouteEpic} from "./actions/demo";
import {routes} from "./reducers/demo";

const rootEpic = combineEpics(
    loadRouteEpic
);

const rootReducer = combineReducers({routes});

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        createEpicMiddleware(rootEpic)
    ))
);