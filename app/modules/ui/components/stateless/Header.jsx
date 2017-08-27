import React from 'react';
import GHButtons from './GHButtons';

const Title = ({ repository }) => (
  <div >
    <h1 className="title" >Leaflet Ant Path</h1 >
    <h2 className="subtitle" >Animate polylines as ants walking in a path</h2 >
    <GHButtons repository={repository} />
  </div >
);

export default ({ repository }) => (
  <div >
    <div className="mobile-header is-hidden-tablet" >
      <div className="container text-center" >
        <Title repository={repository} />
      </div >
    </div >
    <section className="hero is-dark is-hidden-mobile" >
      <div className="hero-body" >
        <div className="container" >
          <Title repository={repository} />
        </div >
      </div >
    </section >
  </div >
)