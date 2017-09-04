import React, { PureComponent } from 'react';
import AntPath from 'react-leaflet-ant-path';

import Map from 'modules/ui/components/Map';
import Card from 'modules/ui/components/stateless/Card';
import { DRIVING, TRANSIT } from "../utils/constants";

const route = (type) => `berlin-postdam_${type}`;

const colors = {
  [DRIVING]: 'red',
  [TRANSIT]: 'purple'
};

const pathsOpts = {
  [route(DRIVING)]: { color: colors[DRIVING], delay: 800 },
  [route(TRANSIT)]: { color: colors[TRANSIT], delay: 300 }
};

export default class FasterOption extends PureComponent {
  static _allRoutesLoaded(routes) {
    return routes.data[route(DRIVING)] && routes.data[route(TRANSIT)];
  }

  componentWillMount() {
    [DRIVING, TRANSIT].forEach(type => this.props.loadRoute(route(type)));
  }

  render() {
    const { routes } = this.props;
    let latLngs;

    if (FasterOption._allRoutesLoaded(routes)) {
      latLngs = [...routes.data[route(DRIVING)], ...routes.data[route(TRANSIT)]];
    }

    return (
      <Card title="Defining the faster route: car vs. public transport" >
        {latLngs ?
          <Map latLngBounds={latLngs} >
            {Object.keys(routes.data).map(routeName =>
              <AntPath key={routeName} positions={routes.data[routeName]} options={pathsOpts[routeName]} />
            )}
          </Map > :
          null}
        <div className="trip-type is-pulled-right" >
          <small style={{ color: colors[DRIVING] }} >
            <span className="icon is-small" ><i className="fa fa-car" /></span > Car
          </small >
          <small style={{ color: colors[TRANSIT] }} >
            <span className="icon is-small" ><i className="fa fa-train" /></span > Public Transport
          </small >
        </div >
      </Card >
    )
  }
}