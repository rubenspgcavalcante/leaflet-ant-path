import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Map as LMap, TileLayer } from "react-leaflet";
import AntPath from "react-leaflet-ant-path"
import { latLng, latLngBounds } from "leaflet";

export default class Map extends PureComponent {
  static propTypes = {
    route: PropTypes.array.isRequired
  };

  render() {
    const { route, options } = this.props;
    const path = route;
    const pathBounds = latLngBounds(path);

    return (
      <LMap bounds={pathBounds} zoom={13} >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AntPath positions={path} options={options} />
      </LMap >
    );
  }
}