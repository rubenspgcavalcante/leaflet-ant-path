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
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-burger">
            <button className="button navbar-burger is-dark" onClick={this._toggleMenu.bind(this)}>
              <span/>
              <span/>
              <span/>
            </button>
          </div>
          <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
            <div className="navbar-end">
              {appRoutes.map(({ path, label }) => <Link to={path} key={path} className="navbar-item"
                                                        onClick={() => open && this._toggleMenu()}>{label}</Link>)}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}