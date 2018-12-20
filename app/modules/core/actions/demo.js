import { LOAD_ROUTE, ROUTE_LOADED } from "./index";
import {Observable, of, concat} from "rxjs";
import {filter, map, mergeMap} from "rxjs/operators";
import routeDecoder from "../../../utils/routeDecoder";
import { loading } from "./loading";

export const loadRoute = (routeName) => ({ type: LOAD_ROUTE, payload: { routeName } });
export const routeLoaded = (name, path) => ({ type: ROUTE_LOADED, payload: { name, path } });

export const loadRouteEpic =
  action$ => action$.pipe(
    filter(ac => ac.type === LOAD_ROUTE),
    map(action => (action.payload.routeName)),
    mergeMap((name) => (
      concat(
        of(loading(true)),
        Observable.create(observer => {
          import(/* webpackMode: "lazy" */ `utils/latlngs/${name}.json`)
            .then(path => {
              observer.next(routeLoaded(name, routeDecoder(path)));
              observer.next(loading(false))
            })
        })
      )
    ))
  )