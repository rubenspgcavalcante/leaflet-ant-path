import { LOADING } from "../actions/index";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case LOADING:
      return state + (payload ? +1 : -1);
  }

  return state;
};