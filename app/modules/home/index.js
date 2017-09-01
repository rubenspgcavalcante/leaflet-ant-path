import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import OptionsSample from './components/containers/OptionsSample';
import options from './reducers/options';
import snippetType from './reducers/snippetType';

export const Component = OptionsSample;
export const reducers = { options, snippetType };