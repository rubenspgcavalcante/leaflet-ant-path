import AntPath from "../components/ant-path.component";
import Reflect from "core-js/es6/reflect";

/**
 * A factory for AntPath component
 * @param {LatLng[]} path
 * @param {Object} opts
 * @returns {AntPath}
 */
export default (path, opts) => Reflect.construct(AntPath, [path, opts]);