import React, { PureComponent } from 'react';
import FasterOption from './containers/FasterOption';

export default class Examples extends PureComponent {
  render() {
    return (
      <div className="examples" >
        <h1 className="title" >Examples</h1 >
        <h2 className="subtitle" >Multiple paths</h2 >
        <FasterOption />
      </div >
    );
  }
};