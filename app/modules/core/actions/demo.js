import { LOAD_ROUTE, ROUTE_LOADED } from "./index";
import { Observable } from "rxjs/Observable";
import routeDecoder from "../../../utils/routeDecoder";

export const loadRoute = (routeName) => ({ type: LOAD_ROUTE, payload: { routeName } });
export const routeLoaded = (name, path) => ({ type: ROUTE_LOADED, payload: { name, path } });
export const loadRouteEpic =
  action$ => action$
    .filter(ac => ac.type === LOAD_ROUTE)
    .map(action => (action.payload.routeName))
    .mergeMap((name) => {
      return Observable.create(observer => {
        import(/* webpackMode: "lazy" */ `utils/latlngs/${name}.json`)
          .then(path => observer.next(routeLoaded(name, routeDecoder(path))));
      });
    });