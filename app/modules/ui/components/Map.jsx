import { PureComponent } from "react";
import { array } from "prop-types";
import { Map as LMap, TileLayer } from "react-leaflet";
import { latLng, latLngBounds as bounds } from "leaflet";

export default class Map extends PureComponent {
  static propTypes = {
    latLngBounds: array.isRequired
  };

  render() {
    const { children, latLngBounds } = this.props;
    const pathBounds = bounds(latLngBounds);

    return (
      <LMap bounds={pathBounds} zoom={13} >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        {children}
      </LMap >
    );
  }
}