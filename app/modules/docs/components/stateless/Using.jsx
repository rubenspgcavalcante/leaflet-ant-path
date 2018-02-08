import React from 'react';
import DocSection from './DocSection';
import CodeSnippet from 'modules/ui/components/stateless/CodeSnippet';
import Table from 'modules/ui/components/stateless/Table';
import Info from './Info';

const table = {
  header: ["name", "returns", "description"],
  rows: [
    ["pause()", "boolean", "Stops the animation"],
    ["resume()", "boolean", "Resume the animation"],
    ["reverse()", "boolean", "Revert the animation"],
    ["map(callback)", "new AntPath or extended class", "Iterates over the latlngs"]
  ]
};

export default ({ title, id }) => (
  <DocSection id={id} title={title} >
    <p >The Ant Path layer, both constructor and factory, can receive the same options
      of a common <a href="http://leafletjs.com/reference-1.2.0.html#polyline" target="blank" >Polyline <span
        className="icon is-small" ><i className="fa fa-external-link" /></span > </a >, plus the
      following options:</p >
    <div className="highlight" >
      <CodeSnippet id="withOptions" />
      <Info >The above options are the default ones</Info >
    </div >
    <p ><b >Methods</b ></p >
    <Table {...table}/>
  </DocSection >
);