import React from 'react';
import {Link} from 'react-router-dom';
import GHButtons from './GHButtons';
import Nav from '../Nav';
import { getRoute } from "routes";

const Title = ({ repository }) => (
  <div >
    <h1 className="title" ><Link to={getRoute('home').path}>Leaflet Ant Path</Link></h1 >
    <h2 className="subtitle" >Animate polylines as ants walking in a path</h2 >
    <GHButtons repository={repository} />
  </div >
);

export default ({ repository }) => (
  <div >
    <section className="hero is-dark" >
      <Nav />
      <div className="hero-body" >
        <div className="container" >
          <Title repository={repository} />
        </div >
      </div >
    </section >
  </div >
)