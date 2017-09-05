import { APP_ROUTES } from "../actions/index";

export default (state = [], { type, payload }) => {
  switch (type) {
    case APP_ROUTES:
      return [...payload];
  }
  return state;
}