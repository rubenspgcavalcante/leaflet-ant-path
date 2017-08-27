import React from 'react';
import Link from 'react-router-dom';
import GHButtons from './GHButtons';

const Title = ({ repository }) => (
  <div >
    <h1 className="title" >Leaflet Ant Path</h1 >
    <h2 className="subtitle" >Animate polylines as ants walking in a path</h2 >
    <GHButtons repository={repository} />
  </div >
);

const Nav = () => (
  <header className="nav" >
    <div className="container" >
      <div className="nav-left" >
        <a className="nav-item" >
          //TODO: logo here
        </a >
      </div >
    </div >
    <div className="nav-right nav-menu" >
      <a href="#" className="nav-item is-active" >Home</a >
    </div >
  </header >
);

export default ({ repository }) => (
  <div >
    <div className="mobile-header is-hidden-tablet" >
      <Nav />
      <div className="container text-center" >
        <Title repository={repository} />
      </div >
    </div >
    <section className="hero is-dark is-hidden-mobile" >
      <Nav />
      <div className="hero-body" >
        <div className="container" >
          <Title repository={repository} />
        </div >
      </div >
    </section >
  </div >
)