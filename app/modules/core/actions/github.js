import { filter, map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { LOAD_REPO_INFO, REPO_INFO_LOADED } from "./index";

const ghApi = action => `https://api.github.com${action}`;
export const loadRepoInfo = () => ({ type: LOAD_REPO_INFO });
export const repoInfoLoaded = info => ({
  type: REPO_INFO_LOADED,
  payload: info
});

export const loadRepoInfoEpic = action$ =>
  action$.pipe(
    filter(ac => ac.type === LOAD_REPO_INFO),
    map(action => ghApi`/repos/rubenspgcavalcante/leaflet-ant-path`),
    mergeMap(url => ajax.getJSON(url).pipe(map(res => repoInfoLoaded(res))))
  );
