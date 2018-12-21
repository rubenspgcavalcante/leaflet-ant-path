import React from 'react';
import { object, string } from 'prop-types';
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from 'react-syntax-highlighter/dist/styles/hljs/darcula';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import html from 'react-syntax-highlighter/dist/languages/hljs/htmlbars';
import shell from 'react-syntax-highlighter/dist/languages/hljs/shell';
import snippets from 'utils/code-snippets';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('htmlbars', html);
SyntaxHighlighter.registerLanguage('shell', shell);

const CodeSnippet = ({ id, params, language = "javascript" }) => (
  <SyntaxHighlighter language={language} style={darcula} >{snippets[id](params)}</SyntaxHighlighter >
);

CodeSnippet.propTypes = {
  id: string.isRequired,
  params: object,
  language: string
};

export default CodeSnippet;