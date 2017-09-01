import React, { PureComponent } from "react";
import AntPath from 'react-leaflet-ant-path';

import Map from "../../ui/components/Map";
import Controls from './Controls';
import CodeDemo from './stateless/CodeDemo';

const DEMO_ROUTE = 'tabuba-fortaleza';

export default class OptionsSample extends PureComponent {
  componentWillMount() {
    this.props.loadRoute(DEMO_ROUTE);
  }

  render() {
    const { routes, options, snippetType, changeSnippet, updateOptions, resetOptions } = this.props;
    const route = routes.data[DEMO_ROUTE] || null;

    return (
      <div className="options-sample" >
        <div className='columns' >
          <div className='column is-8' >
            <div className="box" >
              {route ?
                <Map latLngBounds={route} >
                  <AntPath positions={route} options={options} />
                </Map > :
                null}
            </div >
          </div >
          <div className='column is-4' >
            <div className="box" >
              <Controls options={options} updateOptions={updateOptions} onReset={resetOptions} />
            </div >
          </div >
        </div >
        <div className="columns" >
          <div className="column is-12" >
            <div className="box" >
              <h1 ><i className="fa fa-info-circle" /> Check the above example code:</h1 >
              <CodeDemo type={snippetType} options={options} onClick={(type) => changeSnippet(type)} />
            </div >
          </div >
        </div >
      </div >
    )
  }
}