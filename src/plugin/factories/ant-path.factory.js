import AntPath from "../components/ant-path.component";

export default antPath;

/**
 * A factory for AntPath component
 * @param {LatLng[]} path
 * @param {Object} options
 * @returns {AntPath}
 */
function antPath(path, options) {
    return new AntPath(path, options);
}