import { AntPath } from "../src/plugin/main";
import CustomAntPath from "./components/custom-ant-path";
import MyMap from "./components/my-map";
import Logger from "./components/logger";
import path from "./sample-path.json";

import "materialize-css/dist/css/materialize.min.css";
import "leaflet/dist/leaflet.css";
import "./style/dev-env.sass";

document.addEventListener("DOMContentLoaded", () => {
  const logger = new Logger(document.getElementById("log-container"));
  const container = document.getElementById("container");

  const mapSimple = new MyMap("map-simple", "Simple Usage", container);
  const antPath = new AntPath(path, { reverse: true, hardwareAcceleration: true });
  mapSimple.addLayer(antPath);

  const mapCustom = new MyMap("map-custom", "Custom AntPath", container);
  const customAntPath = new CustomAntPath(path).map(pos => [pos[0] + 0.05, pos[1]]); //translation
  customAntPath.setLatLngs(antPath.getLatLngs());

  mapCustom.addLayer(customAntPath);

  logger.log(antPath.getLatLngs());

  //Changing dynamically the style of the component
  setTimeout(
    () =>
      customAntPath.setStyle({
        reverse: true,
        delay: 1000,
        pulseColor: "#000000",
        color: "blue"
      }),
    5000
  );
});
