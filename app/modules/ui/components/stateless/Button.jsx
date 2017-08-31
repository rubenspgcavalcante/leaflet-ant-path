import React from 'react';
import { any, func, string } from 'prop-types';

const Button = ({ children, icon, href, onClick }) => (
  <a href={!!href ? href : '#'} className="button is-small" onClick={onClick} >
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
  href: string,
  onClick: func
};

export default Button;