import { LOAD_ROUTE, ROUTE_LOADED } from "../actions/index";

const addRoute = (state = {}, action) => {
  const { name, path } = action.payload;
  switch (action.type) {
    case ROUTE_LOADED:
      return {
        ...state,
        [name]: path
      }
  }
  return state;
};

export default (state = { loading: false, data: {} }, action) => {
  switch (action.type) {
    case LOAD_ROUTE:
      return {
        ...state,
        loading: true
      };
    case ROUTE_LOADED:
      return {
        ...state,
        loading: false,
        data: addRoute(state.data, action)
      }
  }

  return state;
};