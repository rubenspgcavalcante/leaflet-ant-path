import React from 'react';
import DocSection from './DocSection';
import CodeSnippet from 'modules/ui/components/stateless/CodeSnippet';
import Info from './Info';


const npmLink = (pack) => `https://www.npmjs.com/package/${pack}`;

const deps = {
  "regenerator-runtime": npmLink`regenerator-runtime`,
  "core-js/es6/symbol": npmLink`core-js`,
  "core-js/es6/reflect": npmLink`core-js`
};

export default ({ id, title }) => (
  <DocSection id={id} title={title} >
    <p >If you're using <b >ES6</b >, you can enjoy some extra features of Leaflet AntPath </p >
    <hr />
    <p ><b >Spread operator</b ></p >
    <div className="highlight" >
      <CodeSnippet id="spread" />
    </div >
    <p ><b >The AntPath object is also iterable</b ></p >
    <div className="highlight" >
      <CodeSnippet id="iterate" />
    </div >
    <p ><b >You can also extend the AntPath class</b ></p >
    <div className="highlight" >
      <CodeSnippet id="extend" />
    </div >
    <p ><b >Or use the "map" method, simmilar to the <a
      href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="blank" >
      Array.map <span className="icon is-small" ><i className="fa fa-external-link" /></span ></a ></b ></p >
    <div className="highlight" >
      <CodeSnippet id="functor" />
      <Info >The ant path acts as a <b >functor</b >, so if you use this method by in a instance of an <b
      >extended class</b > (in this example, "myAntPath") the method return will also be a instance of the <b >extended
        class</b >, and not the AntPath itself</Info >
    </div >
    <hr />
    <h2 className="subtitle" >
      <span className="icon" ><i className="fa fa-warning" /></span ><span >Warning</span >
    </h2 >
    <p >If you pretend to use this features, you should install and use the following dependencies</p >
    <ul className="list-group" >
      {Object.keys(deps).map(key => (
        <li key={key} className="list-group-item" >
          <a href={deps[key]} target="blank" >{key} <span className="icon is-small" ><i
            className="fa fa-external-link" /></span ></a ></li >
      ))}
    </ul >
  </DocSection >
);