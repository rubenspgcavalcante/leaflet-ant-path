import { LOAD_ROUTE, ROUTE_LOADED, LOAD_VECTOR, VECTOR_LOADED } from "./index";

import { Observable, of, concat } from "rxjs";
import { filter, map, mergeMap } from "rxjs/operators";
import routeDecoder from "../../../utils/routeDecoder";
import { loading } from "./loading";

export const loadRoute = routeName => ({
  type: LOAD_ROUTE,
  payload: routeName
});

export const routeLoaded = (name, path) => ({
  type: ROUTE_LOADED,
  payload: { name, path }
});

export const loadVector = vectorName => ({
  type: LOAD_VECTOR,
  payload: vectorName
});
export const vectorLoaded = (name, latLngs) => ({
  type: VECTOR_LOADED,
  payload: { name, latLngs }
});

export const loadVectorEpic = action$ =>
  action$.pipe(
    filter(ac => ac.type === LOAD_VECTOR),
    map(action => action.payload),
    mergeMap(name =>
      concat(
        of(loading(true)),
        Observable.create(observer => {
          import(/* webpackMode: "lazy" */ `utils/simple-vectors/${name}.json`).then(
            mod => {
              observer.next(vectorLoaded(name, mod.default));
              observer.next(loading(false));
            }
          );
        })
      )
    )
  );

export const loadRouteEpic = action$ =>
  action$.pipe(
    filter(ac => ac.type === LOAD_ROUTE),
    map(action => action.payload),
    mergeMap(name =>
      concat(
        of(loading(true)),
        Observable.create(observer => {
          import(/* webpackMode: "lazy" */ `utils/paths/${name}.json`).then(
            path => {
              observer.next(routeLoaded(name, routeDecoder(path)));
              observer.next(loading(false));
            }
          );
        })
      )
    )
  );
