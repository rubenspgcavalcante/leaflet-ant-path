import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import Card from './stateless/Card';

export default class CodePen extends PureComponent {
  static propTypes = {
    hash: string.isRequired,
    title: string.isRequired,
    description: string
  };

  static _profile = (user) => `//codepen.io/${user}`;
  static _src = (user, hash, height = 400, defaultTab = 'js,result', theme = 'dark') =>
    `${CodePen._profile(user)}/embed/${hash}/?height=${height}&theme-id=${theme}&default-tab=${defaultTab}&embed-version=2`;

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    const { hash, title, description } = this.props;
    const { open } = this.state;
    const user = 'rubenspgcavalcante';
    const footerItems = open ? null : ['Load Example'];

    return (
      <Card title={title} footerItems={footerItems} onClick={() => this.setState({ open: true })} >
        {this.state.open ?
          <iframe width='100%' height={400} scrolling="no" src={CodePen._src(user, hash)} frameBorder="no"
                  allowTransparency="true" allowFullScreen="true"
                  style={{ height: 400, width: '100%' }} >
          </iframe > :
          <div className="content" >{description}</div >
        }
      </Card >
    );
  }
};