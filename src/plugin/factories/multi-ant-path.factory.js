import {MultiAntPath} from "../components/multi-ant-path.component";

/**
 * Factory for MultiAntPath component
 * @deprecated
 * @param {L.LatLng[][]} paths
 * @param {Object} options
 * @returns {MultiAntPath}
 */
export default (paths, options) => Reflect.construct(MultiAntPath, [paths, options]);