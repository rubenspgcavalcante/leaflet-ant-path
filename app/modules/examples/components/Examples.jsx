import React, { PureComponent } from 'react';
import AntPath from 'react-leaflet-ant-path';

import Map from 'modules/ui/components/Map';
import Card from 'modules/ui/components/stateless/Card';
import { DRIVING, TRANSIT } from "../utils/constants";

const route = (type) => `berlin-postdam_${type}`;

export default class Examples extends PureComponent {
  constructor(props) {
    super(props);
    this.colors = {
      [DRIVING]: 'red',
      [TRANSIT]: 'purple'
    };

    this.pathsOpts = {
      [route(DRIVING)]: { color: this.colors[DRIVING], delay: 800 },
      [route(TRANSIT)]: { color: this.colors[TRANSIT], delay: 300 }
    };
  }

  componentWillMount() {
    [DRIVING, TRANSIT].forEach(type => this.props.loadRoute(route(type)));
  }

  static _allRoutesLoaded(routes) {
    return routes.data[route(DRIVING)] && routes.data[route(TRANSIT)];
  }

  render() {
    const { routes } = this.props;
    let latlngs;

    if (Examples._allRoutesLoaded(routes)) {
      latlngs = [...routes.data[route(DRIVING)], ...routes.data[route(TRANSIT)]];
    }

    return (
      <div className="examples" >
        <h1 className="title" >Examples</h1 >
        <h2 className="subtitle" >Multiple paths</h2 >
        <Card title="Defining the faster route: car vs. public transport" >
          {latlngs ?
            <Map latLngBounds={latlngs} >
              {Object.keys(routes.data).map(routeName =>
                <AntPath key={routeName} positions={routes.data[routeName]} options={this.pathsOpts[routeName]} />
              )}
            </Map > :
            null}
          <div className="trip-type is-pulled-right" >
            <small style={{ color: this.colors[DRIVING] }} >
              <span className="icon is-small" ><i className="fa fa-car" /></span > Car
            </small >
            <small style={{ color: this.colors[TRANSIT] }} >
              <span className="icon is-small" ><i className="fa fa-train" /></span > Public Transport
            </small >
          </div >
        </Card >
      </div >
    );
  }
};