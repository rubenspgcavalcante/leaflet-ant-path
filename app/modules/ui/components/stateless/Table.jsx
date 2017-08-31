import React from 'react';

export default ({ header, rows }) => (
  <table className="table is-striped is-bordered is-narrow is-fullwidth" >
    <thead >
    <tr >
      {header.map((title) => <th key={title} >{title}</th >)}
    </tr >
    </thead >
    <tbody >
    {rows.map((row, idx) =>
      (<tr key={idx} >
        {row.map((col, idy) => <td key={`${idx}, ${idy}`} >{col}</td >)}
      </tr >)
    )}
    </tbody >
  </table >
);