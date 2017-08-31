import React from 'react';
import DocSection from './DocSection';
import CodeSnippet from 'modules/ui/components/stateless/CodeSnippet';

export default ({ title, id }) => (
  <DocSection id={id} title={title} >
    <p >The Ant Path layer, both constructor and factory, can receive the same options
      of a common <a href="http://leafletjs.com/reference-1.2.0.html#polyline" target="blank" >Polyline <span
        className="icon is-small" ><i className="fa fa-external-link" /></span > </a >, plus the
      following options:</p >
    <div className="highlight" >
      <CodeSnippet id="withOptions" />
      <small ><span className="icon is-small" ><i className="fa fa-info-circle" /></span ><i >The above options are the
        default ones</i ></small >
    </div >
  </DocSection >
);