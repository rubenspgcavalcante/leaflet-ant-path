import React from 'react';
import Button from './Button';

export default ({ repository }) => (
  <div className="field has-addons" >
    <p className="control" >
      <Button icon="github" href={repository.html_url} >Github</Button >
    </p >
    <p className="control" >
      <Button icon="star" href={`${repository.html_url}/stargazers`} >
        Stars {repository.stargazers_count}</Button >
    </p >
    <p className="control" >
      <Button icon="code-fork" href={`${repository.html_url}/fork`} >
        Forks {repository.forks_count}</Button >
    </p >
  </div >
);