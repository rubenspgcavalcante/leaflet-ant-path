import React from 'react';
import { object, string } from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import darcula from 'react-syntax-highlighter/dist/styles/darcula';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import html from 'react-syntax-highlighter/dist/languages/htmlbars';
import shell from 'react-syntax-highlighter/dist/languages/shell';
import snippets from 'utils/code-snippets/index';

registerLanguage('javascript', js);
registerLanguage('htmlbars', html);
registerLanguage('shell', shell);

const CodeSnippet = ({ id, params, language = "javascript" }) => (
  <SyntaxHighlighter language={language} style={darcula} >{snippets[id](params)}</SyntaxHighlighter >
);

CodeSnippet.propTypes = {
  id: string.isRequired,
  params: object,
  language: string
};

export default CodeSnippet;