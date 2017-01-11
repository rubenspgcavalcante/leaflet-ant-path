import {FeatureGroup} from "leaflet";
import AntPath from "./ant-path.component";

/**
 * Builds multi ant path polygons
 * @deprecated
 * @class
 * @extends {L.FeatureGroup}
 */
export default class MultiAntPath extends FeatureGroup {
    options = null;

    constructor(latlngs, options) {
        super();
        console.warn(`
            Deprecation warn: Leaflet 1.x doesn't have support for MultiPolylines, please
            use LayerGroup or FeatureGroup to organize multiple ant-path layers.
        `);

        this.options = options;
        this.setLatLngs(latlngs);
    }

    setLatLngs(latlngs = []) {
        let i = 0,
            len = latlngs.length;

        this.eachLayer(function (layer) {
            if (i < len) {
                layer.setLatLngs(latlngs[i++]);
            } else {
                this.removeLayer(layer);
            }
        }, this);

        while (i < len) {
            this.addLayer(new AntPath(latlngs[i++], this.options));
        }
        return this;
    }

    getLatLngs() {
        let latlngs = [];
        this.eachLayer(layer => latlngs.push(layer.getLatLngs()));
        return latlngs;
    }

    pause() {
        this.eachLayer(layer => layer.pause());
    }

    resume() {
        this.eachLayer(layer => layer.resume());
    }
}