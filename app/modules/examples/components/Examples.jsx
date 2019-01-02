import React, { PureComponent } from 'react';
import FasterOption from './containers/FasterOption';
import CodePen from 'modules/ui/components/CodePen';

export default class Examples extends PureComponent {
  render() {
    return (
      <div className="examples">
        <h1 className="title">Examples</h1>
        <h2 className="subtitle">Multiple paths</h2>
        <FasterOption/>
        <hr/>
        <h1 className="title">Try by yourself</h1>
        <h2 className="subtitle">Editable examples</h2>
        <CodePen title="Stopping and Resuming Route" hash="BYdgXR"
                 description="You can stop and resume the animation any time"/>
        <CodePen title="Reverse Route" hash="MvdJbb"
                 description="You can reverse the route flux"/>
      </div>
    );
  }
};