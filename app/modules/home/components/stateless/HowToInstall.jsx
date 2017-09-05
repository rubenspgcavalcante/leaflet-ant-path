import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => (
  <div >
    <p >
      <Link to='/docs#installing' >
        <span className="icon is-small" ><i className="fa fa-info-circle" /></span > Check how to install
      </Link >
    </p >
  </div >
);