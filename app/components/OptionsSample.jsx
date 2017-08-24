import React, { PureComponent } from "react";

import Map from "./Map";
import Controls from './Controls';


export default class OptionsSample extends PureComponent {
  componentWillMount() {
    this.props.loadRoute();
  }

  render() {
    const { route, options } = this.props;

    return (
      <div className='columns' >
        <div className='column is-8' >
          <div className="box" >
            {route ? <Map route={route} options={options} /> : null}
          </div >
        </div >
        <div className='column is-4' >
          <div className="box" >
            <Controls options={options} updateOptions={this.props.updateOptions} />
          </div >
        </div >
      </div >
    )
  }
}