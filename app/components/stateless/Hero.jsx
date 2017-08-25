import React from 'react';

const title = <h1 className="title" >Leaflet Ant Path</h1 >;
const subTitle = <h2 className="subtitle" >Animate polylines as ants walking in a path</h2 >;

export default () => (
  <div >
    <div className="mobile-header is-hidden-tablet" >
      <div className="container text-center" >
        {title}{subTitle}
      </div >
    </div >
    <section className="hero is-dark is-hidden-mobile" >
      <div className="hero-body" >
        <div className="container" >
          {title}{subTitle}
        </div >
      </div >
    </section >
  </div >
);