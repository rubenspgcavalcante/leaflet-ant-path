import React, { PureComponent } from "react";

import Map from "./Map";
import Controls from './Controls';
import CodeDemo from './stateless/CodeDemo';

export default class OptionsSample extends PureComponent {
  componentWillMount() {
    this.props.loadRoute();
  }

  render() {
    const { route, options, snippetType, changeSnippet, updateOptions } = this.props;

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
              <Controls options={options} updateOptions={updateOptions} />
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