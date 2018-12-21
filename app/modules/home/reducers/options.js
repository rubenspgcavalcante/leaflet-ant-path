import { RESET_OPTIONS, UPDATE_OPTIONS } from "../actions/index";
import { POLYLINE } from "../../../utils/vectors.constant";

const defaultOptions = {
  use: POLYLINE,
  delay: 400,
  dashArray: [10, 20],
  weight: 5,
  color: '#0000FF',
  pulseColor: '#FFFFFF',
  paused: false,
  reverse: false,
  hardwareAccelerated: true
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