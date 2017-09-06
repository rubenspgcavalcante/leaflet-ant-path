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
    this.props.loading(true);
    const loader = componentLoader[component];

    loader().then(Component => {
      this.props.loading(false);
      this.setState({ Component })
    });
  }

  render() {
    const { Component } = this.state;

    return (
      <div >
        {Component ? <Component /> : null}
      </div >
    );
  }
};