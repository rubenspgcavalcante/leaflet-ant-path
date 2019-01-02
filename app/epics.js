import { combineEpics } from "redux-observable";
import { loadRouteEpic, loadVectorEpic } from "./modules/core/actions/demo";
import { loadRepoInfoEpic } from "./modules/core/actions/github";


export default combineEpics(loadRouteEpic, loadRepoInfoEpic, loadVectorEpic);