import { RESET_OPTIONS, UPDATE_OPTIONS } from "../actions/index";

const defaultOptions = {
  delay: 400,
  dashArray: [10, 20],
  weight: 5,
  color: '#0000FF',
  pulseColor: '#FFFFFF'
};

export default (state = defaultOptions, { type, payload }) => {

  switch (type) {
    case UPDATE_OPTIONS:
      return { ...state, ...payload };

    case RESET_OPTIONS:
      return { ...defaultOptions };
  }

  return state;
}