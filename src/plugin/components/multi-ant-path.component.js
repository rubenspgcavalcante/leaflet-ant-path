import {FeatureGroup} from 'leaflet';
import AntPath from './ant-path.component';

/**
 * Builds multi ant path polygons
 * @constructor
 * @extends {L.FeatureGroup}
 */
const MultiAntPath = FeatureGroup.extend({
    options: null,

    initialize: function (latlngs, options) {
        this.options = options;
        this.setLatLngs(latlngs);
    },

    setLatLngs: function (latlngs) {
        var i = 0,
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
    },

    getLatLngs: function () {
        var latlngs = [];

        this.eachLayer(function (layer) {
            latlngs.push(layer.getLatLngs());
        });

        return latlngs;
    },

    pause: function () {
        this.eachLayer(function (layer) {
            layer.pause();
        });
    },

    resume: function () {
        this.eachLayer(function (layer) {
            layer.resume();
        });
    }
});

export default MultiAntPath;