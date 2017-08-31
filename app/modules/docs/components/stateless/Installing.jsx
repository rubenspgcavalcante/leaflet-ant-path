import React from 'react';
import DocSection from './DocSection';
import CodeSnippet from 'modules/ui/components/stateless/CodeSnippet';

export default ({ title, id }) => (
  <DocSection id={id} title={title} >
    <p >If you're using without bundlers (like webpack and rollup), first include the script after Leaflet</p >
    <div className="highlight" >
      <CodeSnippet id="including" language="html" />
    </div >

    <p >
      The library can be downloaded directly in by this <a
      href="https://github.com/rubenspgcavalcante/leaflet-ant-path-bower/archive/master.zip" >link <span
      className="icon is-small" ><i
      className="fa fa-download" /></span ></a ><br />
      Or can be downloaded using a package manager
      <small ><i >(available for npm and bower)</i ></small >
    </p >
    <div className="highlight" >
      <CodeSnippet id="installing" language="shell" />
    </div >
  </DocSection >
);