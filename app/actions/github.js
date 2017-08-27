import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/dom/ajax";
import { LOAD_REPO_INFO, REPO_INFO_LOADED } from "./index";

const ghApi = (action) => `https://api.github.com${action}`;
export const loadRepoInfo = () => ({ type: LOAD_REPO_INFO });
export const repoInfoLoaded = (info) => ({ type: REPO_INFO_LOADED, payload: info });

export const loadRepoInfoEpic =
  action$ => action$
    .filter(ac => ac.type === LOAD_REPO_INFO)
    .map(action => ( ghApi`/repos/rubenspgcavalcante/leaflet-ant-path`))
    .mergeMap((url) => Observable.ajax.getJSON(url).map(res => repoInfoLoaded(res)));