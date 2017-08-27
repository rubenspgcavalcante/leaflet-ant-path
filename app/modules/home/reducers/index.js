import { combineReducers } from "redux";
import routes from './routes';
import options from './options';
import repository from 'modules/core/reducers/repository';

export default combineReducers({ routes, options, repository });