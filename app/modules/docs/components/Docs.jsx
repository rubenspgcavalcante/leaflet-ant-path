import React, { PureComponent } from 'react';
import docsSection from '../utils/docsSections';

export default class Docs extends PureComponent {

  render() {
    return (
      <div className="container" >
        <h1 className="title" >Introduction</h1 >
        <h2 className="subtitle" >How to setup and basic configuration</h2 >
        <hr />
        <div className="columns" >
          <div className="column is-2" >
            <aside className="menu" >
              <p className="menu-label" >General</p >
              <ul className="menu-list" >
                {docsSection.map(({ id, title }) => <li key={id} ><a href={`#${id}`} >{title}</a ></li >)}
              </ul >
            </aside >
          </div >
          <div className="column is-10" >
            <div className="container" >
              {docsSection.map(({ id, title, Component }) => <Component key={id} id={id} title={title} />)}
            </div >
          </div >
        </div >
      </div >
    );
  }
}