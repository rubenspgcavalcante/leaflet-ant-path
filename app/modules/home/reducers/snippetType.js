import { CHANGE_SNIPPET } from "../actions/index";
import { SNIPPET_ES6 } from "../utils/constants";

export default (state = SNIPPET_ES6, { type, payload }) => {
  switch (type) {
    case CHANGE_SNIPPET:
      return payload;
  }

  return state;
}