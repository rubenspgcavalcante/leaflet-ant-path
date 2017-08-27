import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from './reducer';
import { loadRouteEpic } from "./modules/home/actions/demo";
import { loadRepoInfoEpic } from "./modules/core/actions/github";

const rootEpic = combineEpics(
  loadRouteEpic, loadRepoInfoEpic
);


export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    createEpicMiddleware(rootEpic)
  ))
);