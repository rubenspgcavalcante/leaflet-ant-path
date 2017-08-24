import React from 'react';
import { func, number, string } from 'prop-types';
import Slider from 'rc-slider';

const OptionsSlider = ({ property, option, min, max, onOptionChange }) => {
  return (
    <div >
      <label >
        <small ><b >{property}</b > ({option})</small >
      </label >
      <Slider min={min} max={max} defaultValue={option}
              onChange={onOptionChange} />
    </div >
  );
};

OptionsSlider.propTypes = {
  property: string.isRequired,
  option: number.isRequired,
  min: number.isRequired,
  max: number.isRequired,
  onOptionChange: func.isRequired
};

export default OptionsSlider;