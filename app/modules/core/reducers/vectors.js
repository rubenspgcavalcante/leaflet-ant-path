import { VECTOR_LOADED } from "../actions/index";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case VECTOR_LOADED:
      const { name, latLngs } = payload;
      return { ...state, [name]: latLngs };
  }
  return state;
};
