import {AntPath} from "../src/plugin/main";
import MyMap from "./components/my-map";
import path from "./sample-path.json";

import "materialize-css/dist/css/materialize.min.css";
import "leaflet/dist/leaflet.css";
import "./style/dev-env.sass";

document.addEventListener("DOMContentLoaded", ()=> {
    const map = new MyMap();
    map.setView([0, 0], 3);

    const antPath = new AntPath(path);
    map.addLayer(antPath);

    map.fitBounds(antPath.getBounds());
});