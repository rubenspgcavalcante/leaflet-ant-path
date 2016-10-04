import {Polyline, polyline, version} from "leaflet";
import AntPath from "./components/ant-path.component";
import antPath from "./factories/ant-path.factory";
import MultiAntPath  from "./components/multi-ant-path.component";
import multiAntPath from "./factories/multi-ant-path.factory";

import "core-js/es6/symbol";
import "../style/leaflet-ant-path.sass";

Polyline.AntPath = AntPath;
polyline.antPath = antPath;
module.exports = {AntPath, antPath};

if (!version.match(/^1\..*$/)) {
    let {MultiPolyline, multiPolyline} = require("leaflet");
    MultiPolyline.MultiAntPath = MultiAntPath;
    multiPolyline.multiAntPath = multiAntPath;

    module.exports = {...module.exports, MultiAntPath, multiAntPath};
}

export {AntPath, antPath, MultiAntPath, multiAntPath};