import { REPO_INFO_LOADED } from "../../../actions/index";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case REPO_INFO_LOADED:
      return { ...state, ...payload };
  }
  return state;
}