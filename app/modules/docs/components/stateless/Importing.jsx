import React from 'react';
import DocSection from './DocSection';
import CodeSnippet from 'modules/ui/components/stateless/CodeSnippet';

export default ({ title, id }) => (
  <DocSection id={id} title={title} >
    <p >If you're using <b >ES5</b > the AntPath will be inserted on the L global var</p >
    <div className="highlight" >
      <CodeSnippet id="withConstructor" />
    </div >
    <p >You can use also, instead of the constructor, the factory:</p >
    <div className="highlight" >
      <CodeSnippet id="withFactory" />
    </div >

    <hr />

    <p >But in the case you're using <b >ES6</b >, you can just import like this:</p >
    <div className="highlight" >
      <CodeSnippet id="importing" />
    </div >
    <p >Or in the case you're using <b >browserify</b >, you can require like this:</p >
    <div className="highlight" >
      <CodeSnippet id="requiring" />
    </div >
  </DocSection >
);