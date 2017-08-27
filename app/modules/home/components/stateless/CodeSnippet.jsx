import React from 'react';
import { object, string } from 'prop-types';
import renderHTML from 'react-render-html';
import { highlight, languages } from 'prismjs';

import snippets from 'utils/code-snippets/index';


const CodeSnippet = ({ id, options }) => (
  <div >
  <pre className="language-javascript" >
      {snippets[id] ? renderHTML(highlight(snippets[id](options), languages.javascript)) : null};
  </pre >
  </div >
);

CodeSnippet.propTypes = {
  id: string.isRequired,
  options: object.isRequired
};

export default CodeSnippet;