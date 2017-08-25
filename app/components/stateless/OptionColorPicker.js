import React from 'react';
import { ChromePicker } from 'react-color';

export default ({ property, option, display, align = 'left', onClick, onBlur, onChange }) => (
  <div className={`option-color-picker dropdown ${display ? 'is-active' : ''} is-${align}`} onBlur={onBlur} >
    <div className="dropdown-trigger" >
      <label >
        <small ><b >{property}</b ></small >
      </label ><br />
      <button className={`button is-small ${display ? 'is-primary' : 'is-dark'}`} onClick={onClick} aria-haspopup="true"
              aria-controls={`dropdown-menu-${property}`} >

        <span >{option}</span >
        <span className="icon is-small" >
              <i className="fa fa-angle-down" aria-hidden="true" />
            </span >
      </button >
    </div >
    <div className="dropdown-menu" id={`dropdown-menu-${property}`} role="menu" >
      <ChromePicker onChange={(color) => onChange(color.hex)} color={option} />
    </div >
  </div >
);