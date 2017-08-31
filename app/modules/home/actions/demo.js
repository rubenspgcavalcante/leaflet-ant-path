import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/dom/ajax";
import { CHANGE_SNIPPET, LOAD_ROUTE, RESET_OPTIONS, ROUTE_LOADED, UPDATE_OPTIONS } from "./index";

export const loadRoute = (routeName) => ({ type: LOAD_ROUTE, payload: { routeName } });
export const routeLoaded = (name, path) => ({ type: ROUTE_LOADED, payload: { name, path } });

export const updateOptions = (options) => ({ type: UPDATE_OPTIONS, payload: options });

export const changeSnippet = (type) => ({ type: CHANGE_SNIPPET, payload: type });

export const resetOptions = () => ({ type: RESET_OPTIONS });

export const loadRouteEpic =
  action$ => action$
    .filter(ac => ac.type === LOAD_ROUTE)
    .map(action => ({ name: action.payload.routeName, url: `dist/${action.payload.routeName}.json` }))
    .mergeMap(({ name, url }) => Observable.ajax.getJSON(url).map(res => routeLoaded(name, res)));