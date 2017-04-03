import {MultiAntPath} from "../components/multi-ant-path.component";
import {Reflect} from "core-js/es6/reflect";

/**
 * Factory for MultiAntPath component
 * @deprecated
 * @param {L.LatLng[][]} paths
 * @param {Object} options
 * @returns {MultiAntPath}
 */
export default (paths, options) => Reflect.construct(MultiAntPath, [paths, options]);