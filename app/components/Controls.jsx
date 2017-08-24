import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import throttle from 'lodash/throttle';

import OptionSlider from './stateless/OptionSlider';

export default class Controls extends PureComponent {
  static propTypes = {
    updateOptions: func.isRequired
  };

  delayedChange = throttle((options) => {
    this.props.updateOptions(options);
  }, 50);

  render() {
    const delayedChange = this.delayedChange.bind(this);
    const { options } = this.props;

    return (
      <div >
        <span className='subtitle' ><span className='icon' ><i className='fa fa-cogs' /></span > Options</span >
        <hr />
        <OptionSlider property="delay" onOptionChange={(delay) => delayedChange({ delay })}
                      min={1} max={800} option={options.delay} />

        <OptionSlider property="weight" onOptionChange={(weight) => delayedChange({ weight })}
                      min={1} max={20} option={options.weight} />

        <div className="columns" >
          <div className="column is-6" >
            <OptionSlider property="dashArray[0]"
                          onOptionChange={(dashArrayX) => delayedChange({ dashArray: [dashArrayX, options.dashArray[1]] })}
                          min={1} max={100} option={options.dashArray[0]} />
          </div >

          <div className="column is-6" >
            <OptionSlider property="dashArray[1]"
                          onOptionChange={(dashArrayY) => delayedChange({ dashArray: [options.dashArray[0], dashArrayY] })}
                          min={1} max={100} option={options.dashArray[1]} />
          </div >
        </div >
      </div >
    )
  }
}