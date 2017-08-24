import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { loadRouteEpic } from "./actions/demo";
import reducer from './reducers/index';

const rootEpic = combineEpics(
  loadRouteEpic
);


export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    createEpicMiddleware(rootEpic)
  ))
);