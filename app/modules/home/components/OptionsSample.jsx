import React, { PureComponent } from "react";

import Map from "./Map";
import Controls from './Controls';
import CodeSnippet from './stateless/CodeSnippet';

export default class OptionsSample extends PureComponent {
  componentWillMount() {
    this.props.loadRoute();
  }

  render() {
    const { route, options } = this.props;

    return (
      <div className="options-sample" >
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
        <div className="columns" >
          <div className="column is-12" >
            <div className="box" >
              <h1 >Check the above example:</h1 >
              <CodeSnippet id="mainDemo" options={options} />
            </div >
          </div >
        </div >
      </div >
    )
  }
}