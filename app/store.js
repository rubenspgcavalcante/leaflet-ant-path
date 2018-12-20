import { applyMiddleware, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";
import { loadRouteEpic } from "./modules/core/actions/demo";
import { loadRepoInfoEpic } from "./modules/core/actions/github";

const rootEpic = combineEpics(loadRouteEpic, loadRepoInfoEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
