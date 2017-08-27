import React from 'react';
import Button from 'modules/ui/components/Button';

const title =
  <div >
    <h1 className="title" >Leaflet Ant Path</h1 >
    <h2 className="subtitle" >Animate polylines as ants walking in a path</h2 >
    <div className="field has-addons" >
      <p className="control" >
        <Button icon="github"
                onClick={() => window.location = "https://github.com/rubenspgcavalcante/leaflet-ant-path"} >Github</Button >
      </p >
      <p className="control" >
        <Button icon="star"
                onClick={() => window.location = "https://github.com/rubenspgcavalcante/leaflet-ant-path/stargazers"} >Star</Button >
      </p >
      <p className="control" >
        <Button icon="code-fork"
                onClick={() => window.location = "https://github.com/rubenspgcavalcante/leaflet-ant-path/fork"} >Fork</Button >
      </p >
    </div >
  </div >;


export default () => (
  <div >
    <div className="mobile-header is-hidden-tablet" >
      <div className="container text-center" >
        {title}
      </div >
    </div >
    <section className="hero is-dark is-hidden-mobile" >
      <div className="hero-body" >
        <div className="container" >
          {title}
        </div >
      </div >
    </section >
  </div >
);