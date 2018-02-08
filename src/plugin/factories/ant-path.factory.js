import AntPath from "../components/ant-path.component";

/**
 * A factory for AntPath component
 * @param {LatLng[]} path
 * @param {Object} opts
 * @returns {AntPath}
 */
export default (path, opts) => Reflect.construct(AntPath, [path, opts]);
