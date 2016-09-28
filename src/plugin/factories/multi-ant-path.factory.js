import {MultiAntPath} from "../components/multi-ant-path.component";
export default multiAntPath;

/**
 * Factory for MultiAntPath component
 * @deprecated
 * @param {L.LatLng[][]} paths
 * @param {Object} options
 * @returns {MultiAntPath}
 */
function multiAntPath(paths, options) {
    return new MultiAntPath(paths, options);
}