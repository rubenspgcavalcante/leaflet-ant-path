import { combineReducers } from 'redux';
import { reducers as homeReducers } from './modules/home/index';
import { reducers as coreReducers } from './modules/core/index';

export default combineReducers({ ...coreReducers, ...homeReducers })