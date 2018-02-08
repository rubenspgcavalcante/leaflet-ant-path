import { Polyline, polyline } from "leaflet";
import AntPath from "./components/ant-path.component";
import antPath from "./factories/ant-path.factory";

import "../style/leaflet-ant-path.sass";

Polyline.AntPath = AntPath;
polyline.antPath = antPath;
module.exports = { AntPath, antPath };

export { AntPath, antPath };
