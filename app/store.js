import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { loadRouteEpic } from "./modules/home/actions/demo";
import reducer from './modules/home/reducers/index';
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