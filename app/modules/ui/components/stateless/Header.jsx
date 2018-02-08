import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutesProvider } from "modules/core/index";
import GHButtons from './GHButtons';
import Nav from '../Nav';

const Title = ({ repository, appRoutes, getRoute }) => (
  <div >
    <h1 className="title" ><Link to={getRoute(appRoutes, 'home').path} >Leaflet Ant Path</Link ></h1 >
    <h2 className="subtitle" >Animate polylines as ants walking in a path</h2 >
    <GHButtons repository={repository} />
  </div >
);

export default ({ repository }) => (
  <header >
    <section className="hero is-dark" >
      <AppRoutesProvider >
        <Nav />
      </AppRoutesProvider >
      <div className="hero-body" >
        <div className="container" >
          <AppRoutesProvider >
            <Title repository={repository} />
          </AppRoutesProvider >
        </div >
      </div >
    </section >
  </header >
)