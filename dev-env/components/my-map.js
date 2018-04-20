import { Map, tileLayer } from "leaflet";

export default class MyMap extends Map {
  constructor(id, title, container) {
    container.appendChild(MyMap._renderContainer(id, title));
    super(id, { preferCanvas: true });

    tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(this);
  }

  addLayer(layer) {
    super.addLayer(layer);
    layer.getBounds && super.fitBounds(layer.getBounds());
  }

  static _renderContainer(id, title) {
    const template = `<div class="col m6 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">${title}</span>
                    <div id="${id}" class="map-container"></div>
                </div>
            </div>
        </div>`;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = template;

    return wrapper.firstChild;
  }
}
