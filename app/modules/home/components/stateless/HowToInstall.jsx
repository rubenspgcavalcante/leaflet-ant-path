import React from 'react';
import { Link } from 'react-router-dom';

export default ({ appRoutes, getRoute }) => (
  <div >
    <p >
      <Link to={{ pathname: getRoute(appRoutes, 'documentation').path, hash: '#including-installing' }} >
        <span className="icon" ><i className="fa fa-info-circle" /></span > Check how to install
      </Link >
    </p >
  </div >
);