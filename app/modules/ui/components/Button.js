import React from 'react';
import { any, func, string } from 'prop-types';

const Button = ({ children, icon, onClick }) => (
  <a className="button is-small" onClick={onClick} >
    {icon ?
      <span className="icon" >
        <i className={`fa fa-${icon}`} />
      </span > : null
    }
    <span >{children}</span >
  </a >
);

Button.propTypes = {
  icon: string,
  onClick: func
};

export default Button;