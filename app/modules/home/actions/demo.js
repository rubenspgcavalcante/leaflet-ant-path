import { CHANGE_SNIPPET, RESET_OPTIONS, UPDATE_OPTIONS } from "./index";

export const updateOptions = (options) => ({ type: UPDATE_OPTIONS, payload: options });

export const changeSnippet = (type) => ({ type: CHANGE_SNIPPET, payload: type });

export const resetOptions = () => ({ type: RESET_OPTIONS });

