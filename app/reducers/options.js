import { UPDATE_OPTIONS } from "../actions/index";

export default (state = {
  delay: 400,
  dashArray: [10, 20],
  weight: 5,
  color: '#0000FF',
  pulseColor: '#FFFFFF'
}, { type, payload }) => {

  switch (type) {
    case UPDATE_OPTIONS:
      return { ...state, ...payload };
  }

  return state;
}