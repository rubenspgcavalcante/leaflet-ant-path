import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { componentLoader } from "../utils/routeDefinitions";

export default class  extends PureComponent {
  static propTypes = {
    component: string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    const { component } = this.props;
    componentLoader[component]().then(Component => this.setState({ Component }));
  }

  render() {
    const { Component } = this.state;

    return (
      <div >
        {Component ? <Component /> : <div >Loading!</div >}
      </div >
    );
  }
};