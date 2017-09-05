import React, { PureComponent } from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';

export default class Nav extends PureComponent {
  static propTypes = {
    appRoutes: array
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  _toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    const { appRoutes } = this.props;

    return (
      <header className="nav" >
        <div className="container" >
          <div className="nav-left" >
            <a className="nav-item" >
              {/* TODO: logo here */}
            </a >
          </div >
          <div >
          <span id="nav-toggle" className="nav-toggle" onClick={this._toggleMenu.bind(this)} >
            <span />
            <span />
            <span />
          </span >
          </div >
          <div className={`nav-right nav-menu ${open ? 'is-active' : ''}`} >
            {appRoutes.map(({ path, label }) => <Link to={path} key={path} className="nav-item"
                                                      onClick={() => open && this._toggleMenu()} >{label}</Link >)}
          </div >
        </div >
      </header >
    );
  }
}