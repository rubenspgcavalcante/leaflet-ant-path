import React from 'react';
import CodeSnippet from 'modules/ui/components/stateless/CodeSnippet';
import { SNIPPET_BROWSERIFY, SNIPPET_ES5, SNIPPET_ES6 } from "../../utils/constants";

const tabs = [
  { title: 'ES6', type: SNIPPET_ES6 },
  { title: 'Browserify', type: SNIPPET_BROWSERIFY },
  { title: 'ES5', type: SNIPPET_ES5 }
];

const mapSnippetToType = {
  [SNIPPET_ES6]: 'es6',
  [SNIPPET_ES5]: 'es5',
  [SNIPPET_BROWSERIFY]: 'browserify'
};

export default ({ type, options, onClick }) => (
  <div >
    <div className="tabs is-centered is-boxed" >
      <ul >
        {tabs.map((tab) => (
          <li key={tab.type} className={tab.type === type ? 'is-active' : ''} >
            <a onClick={() => onClick(tab.type)} >
            <span className="icon is-small" ><i
              className={`fa fa-${tab.type === type ? 'circle' : 'circle-o'}`} /></span >
              <span >{tab.title}</span >
            </a >
          </li >
        ))}
      </ul >
    </div >
    <div className="highlight" >
      <CodeSnippet id={mapSnippetToType[type]} params={options} />
    </div >
  </div >
);