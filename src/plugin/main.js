import { Polyline, polyline } from "leaflet";
import _AntPath from "./components/ant-path.component";
import _antPath from "./factories/ant-path.factory";

import "../style/leaflet-ant-path.sass";

Polyline.AntPath = _AntPath;
polyline.antPath = _antPath;

export const AntPath = _AntPath;
export const antPath = _antPath;
export default { AntPath, antPath };
