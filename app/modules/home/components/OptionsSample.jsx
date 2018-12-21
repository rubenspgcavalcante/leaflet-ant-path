import React, { PureComponent } from "react";
import AntPath from "react-leaflet-ant-path";
import L from "leaflet";

import Map from "modules/ui/components/Map";
import { AppRoutesProvider } from "modules/core/index";
import Controls from "./Controls";
import CodeDemo from "./stateless/CodeDemo";
import HowToInstall from "./stateless/HowToInstall";
import { POLYLINE } from "../../../utils/vectors.constant";

const DEMO_ROUTE = "tabuba-fortaleza";

export default class OptionsSample extends PureComponent {
  componentWillMount() {
    this.props.loadRoute(DEMO_ROUTE);
  }

  render() {
    const {
      routes,
      snippetType,
      options,
      changeSnippet,
      updateOptions,
      resetOptions
    } = this.props;
    const route = routes.data[DEMO_ROUTE] || null;

    return (
      <div className="options-sample">
        <div className="columns">
          <div className="column is-8">
            <div className="box">
              {route ? (
                <Map latLngBounds={route}>
                  <AntPath
                    positions={route}
                    options={{ ...options, use: L[options.use] }}
                  />
                </Map>
              ) : null}
            </div>
          </div>
          <div className="column is-4">
            <div className="columns">
              <div className="container">
                <div className="column is-12">
                  <div className="box">
                    <Controls
                      options={options}
                      updateOptions={updateOptions}
                      onReset={resetOptions}
                    />
                  </div>
                </div>

                <div className="column is-12">
                  <div className="box">
                    <AppRoutesProvider>
                      <HowToInstall />
                    </AppRoutesProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <div className="box">
              <h1>
                <i className="fa fa-info-circle" /> Check the above example
                code:
              </h1>
              <CodeDemo
                type={snippetType}
                options={options}
                onClick={type => changeSnippet(type)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
