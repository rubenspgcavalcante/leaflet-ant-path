import React from 'react';
import Button from './Button';

export default ({ repository }) => (
  <div className="field has-addons" >
    <p className="control" >
      <Button icon="github"
              onClick={() => window.location = repository.html_url} >Github</Button >
    </p >
    <p className="control" >
      <Button icon="star"
              onClick={() => window.location = `${repository.html_url}/stargazers`} >
        Stars {repository.stargazers_count}</Button >
    </p >
    <p className="control" >
      <Button icon="code-fork"
              onClick={() => window.location = `${repository.html_url}/fork`} >
        Forks {repository.forks_count}</Button >
    </p >
  </div >
);