import {Polyline, MultiPolyline, polyline, multiPolyline} from "leaflet";
import AntPath from "./components/ant-path.component";
import antPath from "./factories/ant-path.factory";
import MultiAntPath  from "./components/multi-ant-path.component";
import multiAntPath from "./factories/multi-ant-path.factory";

import "../style/leaflet-ant-path.sass";

Polyline.AntPath = AntPath;
polyline.antPath = antPath;
MultiPolyline.MultiAntPath = MultiAntPath;
multiPolyline.multiAntPat = multiAntPath;

export {AntPath, antPath, MultiAntPath, multiAntPath};