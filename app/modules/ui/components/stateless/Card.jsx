import React from 'react';
import { string } from 'prop-types';

const Card = ({ title, icon, footerItems, onClick, children }) => (
  <div className="card" >
    {title ?
      <header className="card-header" >
        <p className="card-header-title" >
          {title}
        </p >
        <a className="card-header-icon" >
          {icon ?
            <span className="icon" >
            <i className={`fa fa-${icon}`} />
          </span > : null
          }
        </a >
      </header > : null
    }
    <div className="card-content" >
      <div className="content" >
        {children}
      </div >
    </div >
    {footerItems ?
      <footer className="card-footer" >
        {footerItems.map(item => <a key={item} className="card-footer-item"
                                    onClick={(ev) => onClick(item)} >{item}</a >)}
      </footer > : null
    }
  </div >
);

Card.propTypes = {
  title: string,
  icon: string
};

export default Card;